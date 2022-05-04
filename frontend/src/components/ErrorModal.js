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
                        You have to log in if you already have an account
                        or sign up if you don't have an account.
                    </div>
                    <div className="modal-footer">
                        <Link to="/login">
                            <button type="button" className="btn btn-primary">Log in</button>
                        </Link>
                        <Link to="/signup">
                            <button type="button" className="btn btn-secondary">Sign up</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ErrorModal