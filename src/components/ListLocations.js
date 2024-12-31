import React, { useState } from 'react';
import ListVolunteers from './ListVolunteers';
import VolunteersTable from './VolunteersTable';
import AssignmentsTable from './AssignmentsTable';

function ListLocations({ location, assignmentData, setAssignmentData }) {
 

  const [volunteers, setVolunteers] = useState([
    //{ id: 0, name: '', email: '', phone: '', volunteerStatus: '' }//,
    { id: 0, shiftTime: '', name: '', email: '', phone: '', assignment: '', volunteerStatus: '' }//,
    //{ id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321', volunteerStatus: 'Accepted' },
  ]);
  const [assignmentMessage, setAssignmentMessage] = useState([
    // eslint-disable-next-line no-template-curly-in-string
    //`Hello ${brotherSister} ${lastName}, this is Will Steele, the key man for your ${dayOfWeek} ${date} shift at ${location}, would you be willing and able to ${pickUpDropoff} the carts for your shift?  Thank you for your cooperation`
  ]);
  const updateVolunteer = (id, updatedVolunteer) => {
    console.log('\n\n updateVolunteer: '+JSON.stringify(updatedVolunteer))
    setVolunteers(volunteers.map(volunteer => 
      volunteer.id === id ? updatedVolunteer : volunteer
    ));
  };
  const [assignments, setAssignments] = useState([]);
  /*  { id: 0, location: '', assignmentTime: '', name: '', email: '', phone: '', assignmentStatus: '' },
    { id: 1, location: 'Broad', assignmentTime: '1-3pm', name: 'William Steele', email: 'william_steele@me.com', phone: '123', assignmentStatus: 'Accepted' }
  ]);*/
  const handleAssignmentChange = (item, isSelected) => {
    console.log('\n\n IN PARENT: handleAssignmentChange: item: '+JSON.stringify(item)+' isSelected: '+isSelected)
    if (isSelected) {
      // Add item to the selected list
      setAssignments((prevItems) => [...prevItems, item]);
    } else {
      // Remove item from the selected list
      setAssignments((prevItems) => prevItems.filter((i) => i !== item));
    }
  };
  return (
    <div>
      <h1>Volunteers</h1>
      <div className="App">
            <ListVolunteers location={location} assignmentData={assignmentData} setAssignmentData={setAssignmentData} volunteers={volunteers} setVolunteers={setVolunteers} updateVolunteer={updateVolunteer}  onSelectionChange={handleAssignmentChange} />
      </div>
      <VolunteersTable location={location} assignmentData={assignmentData} setAssignmentData={setAssignmentData} volunteers={volunteers} setVolunteers={setVolunteers} />
      <AssignmentsTable assignments={assignments} setAssignments={setAssignments} assignmentMessage={assignmentMessage} setAssignmentMessage={setAssignmentMessage} />
    </div> 
  );
}

export default ListLocations;
