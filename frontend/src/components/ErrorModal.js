import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap"
import UserContext from './UserContext'

function ErrorModal() {

    const { showErrorModal, setShowErrorModal } = useContext(UserContext);
    return (
        <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>  You have to log in if you already have an account
                or sign up if you don't have an account.
            </Modal.Body>
            <Modal.Footer>
                <Link to='/login'>
                    <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
                        Log in
                    </Button>
                </Link>
                <Link to='/signup'>
                    <Button variant="primary" onClick={() => setShowErrorModal(false)}>
                        Sign Up
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default ErrorModal