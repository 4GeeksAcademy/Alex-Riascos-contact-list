import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard"
import Modal from "../component/modal"

export const Home = () => {
	const [showModal, setShowModal] = useState(false)
	const [contacto, setContacto] = useState(null)
	const { store, actions } = useContext(Context)

	return (
		<>
			<div className="container">
				<div className="row">

					<div className="col-md-10">
						{
							store.contactsList.length > 0 &&
							store.contactsList.map((contact) => {
								return (
									<ContactCard {...contact} key={contact.id} onClickModal={() => {
										setContacto(contact)
										setShowModal(true)
									}} />
								)
							})
						}
					</div>
				</div>
			</div>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				contacto={contacto}
				deleteContact={actions.deleteContact}
			/>
		</>
	)
};
