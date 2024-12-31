import React, { useState, useEffect } from 'react';
import ListLocations from './components/ListLocations';
import ContactCardTable from './components/ContactCardTable';

import './App.css';
const App = () => {
  const locations = ['Battery','Broad','College','Exchange']
  const [assignmentData, setAssignmentData] = useState({
    date: '',
    dayOfWeek: '',
    location: ''
  });
  return (
    <div>
      <h1>Welcome to my app.100</h1>
      <h1>Locations</h1>
      <div className="App list-container">
      {locations.map((location, index) => (
        <ListLocations location={location} assignmentData={assignmentData} setAssignmentData={setAssignmentData} />
      ))};
        </div>
        </div>
    );
};
export default App;

/*
        <ContactCardTable />
      {locations.map(location => {
        setAssignmentData({ ...assignmentData, location: location });
        return (
          <ListLocations location assignmentData={assignmentData} setAssignmentData={setAssignmentData} />
        )
      })}
      {locations.map((location, index) => (
        //setAssignmentData({ ...assignmentData, location: location });
        <ListLocations location assignmentData={assignmentData} setAssignmentData={setAssignmentData} />
      ))}

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321' },
  ]);

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ListComponent contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
*/
