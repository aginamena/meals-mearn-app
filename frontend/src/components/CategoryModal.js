import React from 'react'
import "../styles/Modal.css"

function CategoryModal(props) {
    return (
        <div className="modal fade" id="categoryModal" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{props.name}</h5>

                    </div>
                    <div className="modal-body">
                        <div>
                            <img src={props.image}></img>
                            <div style={{ margin: "20px 0" }}>
                                {
                                    props.tags && <div style={{ display: "flex", alignItems: "center" }}>
                                        <h5 style={{ marginRight: "20px" }}>Tags:</h5>
                                        <small>{props.tags}</small>
                                    </div>
                                }

                                <a href={props.youtubeTutorial} target="_blank">Youtube tutorial</a>
                            </div>

                        </div>
                        <div>
                            <h3>Instructions</h3>
                            <div>{props.instructions}</div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CategoryModal