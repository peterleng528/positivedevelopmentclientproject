import React, { useState } from 'react';

const ClientManager = () => {
  const [clients, setClients] = useState([]);
  const [formState, setFormState] = useState({ firstName: '', lastName: '', dob: '', email: '', address: '', status: '' });
  const [filterStatus, setFilterStatus] = useState('');

  const handleInputChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  }

  const addClient = (event) => {
    event.preventDefault();
    setClients([...clients, formState]);
    setFormState({ firstName: '', lastName: '', dob: '', email: '', address: '', status: '' });
  }

  const filteredClients = clients.filter(client => filterStatus === '' || client.status === filterStatus);

  return (
    <div>
      <h1>Client Manager</h1>

      <h2>Add New Client</h2>
      <form onSubmit={addClient}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formState.firstName} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formState.lastName} onChange={handleInputChange} />
        </label>
        <label>
          DOB:
          <input type="date" name="dob" value={formState.dob} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formState.email} onChange={handleInputChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formState.address} onChange={handleInputChange} />
        </label>
        <label>
          Status:
          <select name="status" value={formState.status} onChange={handleInputChange}>
            <option value="New">New</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
        <button type="submit">Add Client</button>
      </form>

      <h2>Clients</h2>
      <label>
        Filter by status:
        <select value={filterStatus} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="New">New</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </label>
      <div>
        {filteredClients.map((client, index) => (
          <div key={index}>
            <p>Name: {client.firstName} {client.lastName}</p>
            <p>DOB: {client.dob}</p>
            <p>Email: {client.email}</p>
            <p>Address: {client.address}</p>
            <p>Status: {client.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientManager;
