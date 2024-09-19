import React from 'react'

const Modal = ({ showModal, setShowModal, contacto, deleteContact }) => {
    if (!showModal) return null;
    return (


        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                        <p>Please don't delete {contacto?.name} :( </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                            onClick={() => {
                                deleteContact(contacto.id)
                                setShowModal(false);

                            }}

                        >Yes baby!</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                            setShowModal(false);
                        }} >Oh no!</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Modal

