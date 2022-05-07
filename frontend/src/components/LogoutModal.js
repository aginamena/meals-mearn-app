import React, { useState, useContext } from 'react'
import { Modal, Button } from "react-bootstrap"
import UserContext from './UserContext';

export default function LogoutModal(props) {

    const { showLogoutModal, setShowLogoutModal, setIsLoggedIn } = useContext(UserContext);

    return (
        <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>Are you sure you want to log out?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    setIsLoggedIn(false)
                    setShowLogoutModal(false)

                }}>
                    Yes
                </Button>
                <Button variant="primary" onClick={() => setShowLogoutModal(false)}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
