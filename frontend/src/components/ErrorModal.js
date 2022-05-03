import React from 'react'
import { Link } from 'react-router-dom'

function ErrorModal() {
    return (
        <div className="modal fade" id="errorModal" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header" style={{ justifyContent: "end" }}>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            style={{ border: "0" }}>
                            <span aria-hidden="true">X</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        You have to login if you already have an account
                        or signup if you don't have an account.
                    </div>
                    <div className="modal-footer">
                        <Link to="/login">
                            <button type="button" className="btn btn-primary">Login</button>
                        </Link>
                        <button type="button" className="btn btn-secondary">Signup</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ErrorModal