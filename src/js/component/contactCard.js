import React from "react";
import imagen from "../../img/deadpool.png"
import { Link } from "react-router-dom";

const ContactCard = ({ id, name, email, phone, address, onClick }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0 justify-content-between">
                <div className="col-md-4 py-3">
                    <img src={imagen} className="rounded mx-auto d-block rounded-circle" alt="..." width={200} height={200} />
                </div>
                <div className="col-md-6">
                    <div className="card-body d-flex flex-column justify-content-center h-100">
                        <h4 className="card-title">{name}</h4>

                        <p className="card-text mb-1"><i className="fa-solid fa-location-dot"></i> {address}</p>
                        <p className="card-text mb-1"><i className="fa-solid fa-phone"></i> {phone}</p>
                        <p className="card-text mb-1"><i className="fa-regular fa-envelope"></i> {email}</p>

                    </div>
                </div>
                <div className="col-md-1 d-flex justify-content-end">

                    <div className="btn mx-0 px-0">
                        <Link className="btn" to={`/editContact/${id}`}> <i className="fa-solid fa-pen"></i> </Link>
                    </div>
                    <div className="btn mx-0 px-0">
                        <button className="btn" onClick={onClick}> <i className="fa-solid fa-trash"></i> </button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default ContactCard;

