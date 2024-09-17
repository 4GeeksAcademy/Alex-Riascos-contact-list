import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router";


const AddNewContact = () => {

    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const { contact_id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const contact = {
            name: name,
            phone: phone,
            email: email,
            address: address,
        };

        if (contact_id !== undefined) {
            actions.updateContact(contact, contact_id);
        } else {
            actions.createContact(contact);
        }


        setName("");
        setPhone("");
        setEmail("");
        setAddress("");
        navigate("/");
    };

    useEffect(() => {
        if (Array.isArray(store.contacts)) {
            const contacts = [...store.contacts];
            if (contact_id !== undefined) {
                const contact = contacts.find((item) => item.id === parseInt(contact_id));
                setName(contact?.name);
                setEmail(contact?.email);
                setAddress(contact?.address);
                setPhone(contact?.phone);
            }
        }
    }, [store.contacts, contact_id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-m-12 ">
                    <h3 className="text-center">{contact_id ? "Edit" : "Add a new"} contact</h3>
                </div>
                <div className="col-m-12">
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Phone</label>
                        <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <button className="btn btn-primary w-100" onClick={handleSubmit}>
                        save
                    </button>

                    <a href="#" class="text-decoration-underline" onClick={() => navigate("/")}>
                        Or get back to contacts
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AddNewContact;



