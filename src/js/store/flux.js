const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: 'agendaAlexR',
			contactsList: [],
		},
		actions: {

			getAgenda: async () => {
				const { agenda } = getStore();
				const { createAgenda } = getActions();

				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}`);
					console.log(response);

					if (response.status === 404) {
						createAgenda();
					} else {
						const data = await response.json();
						console.log(data);
						setStore({ contactsList: data.contacts });
					}
				} catch (error) {
					console.error('Error al obtener la agenda:', error);
				}
			},

			createAgenda: async () => {
				const { agenda } = getStore();
				const { getAgenda } = getActions();

				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}`, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' }
					});

					console.log(response);

					if (response.status === 201) {
						getAgenda();
					}

					const data = await response.json();
					console.log(data);
				} catch (error) {
					console.error('Error al crear la agenda:', error);
				}
			},

			createContact: async (contacts) => {
				const { agenda } = getStore();
				const { getAgenda } = getActions();

				console.log(contacts);

				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts`, {
						method: 'POST',
						body: JSON.stringify(contacts),
						headers: {
							'Content-Type': 'application/json'
						}
					});

					if (response.status === 201) {
						getAgenda();
					}

					const data = await response.json();
					console.log(data);
				} catch (error) {
					console.error('Error al crear el contacto:', error);
				}
			},
			updateContact: async (contacts, id) => {
				const { agenda } = getStore();
				const { getAgenda } = getActions();

				console.log(contacts);

				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${id}`, {
						method: 'PUT',
						body: JSON.stringify(contacts),
						headers: {
							'Content-Type': 'application/json'
						}
					});

					if (response.status === 200) {
						getAgenda();
					}

					const responseData = await response.json();
					console.log(responseData);
				} catch (error) {
					console.error('Error al actualizar el contacto:', error);
				}
			},

			deleteContact: async (id) => {
				const { agenda } = getStore();
				const { getAgenda } = getActions();

				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${id}`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						}
					});

					console.log(response);

					if (response.status === 204) {
						getAgenda();
					}

					const responseData = await response.json();
					console.log(responseData);
				} catch (error) {
					console.error('Error al eliminar el contacto:', error);
				}
			}
		}
	};
};

export default getState;
