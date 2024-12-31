import React, { useState } from 'react';
import AssignmentCard from './AssignmentCard';
//import DatePicker from 'react-datepicker';
//import { format } from "date-fns";

import 'react-datepicker/dist/react-datepicker.css';

const AssignmentsTable = ({assignmentData, setAssignmentData, assignments, setAssignments, assignmentMessage, setAssignmentMessage}) => {
    //const [volunteersInput, setVolunteersInput] = useState('');
    //const [parsedVolunteers, setParsedVolunteers] = useState([]);
    //const [selectedLocation, setSelectedLocation] = useState('');
    //const [selectedDate, setSelectedDate] = useState(null);
    //const [selectedAction, setSelectedAction] = useState('');

    /*const handleDateChange = (date) => {
      setSelectedDate(date);
    };*/
  
  

  /*const handleVolunteersInputChange = (event) => {
    setVolunteersInput(event.target.value);

          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.id}</td>
              <td>{assignment.location}</td>
              <td>{assignment.assignmentTime}</td>
              <td>{assignment.name}</td>
              <td>{assignment.email}</td>
              <td>{assignment.phone}</td>
              <td>{assignment.assignmentStatus}</td>
            </tr>
          ))}
        </tbody>

    };*/

  //    { id: 1, location: 'Broad', assignmentTime: '1-3pm', name: 'William Steele', email: 'william_steele@me.com', phone: '123', assignmentStatus: 'Accepted' }


  return (
    <div>
      <h2>Assignments List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Assignment Time</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Brother/Sister</th>
            <th>Pickup/Dropoff</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(assignment => (
            <AssignmentCard key={assignment.id} assignmentData={assignmentData} setAssignmentData={setAssignmentData} assignment={assignment} assignmentMessage={assignmentMessage} setAssignmentMessage={setAssignmentMessage} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentsTable;