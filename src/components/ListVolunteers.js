import React from 'react';
import VolunteerCard from './VolunteerCard';
import './components.css';


function ListVolunteers({ location, assignmentData, setAssignmentData, volunteers, setVolunteers, updateVolunteer, onSelectionChange }) {
  //const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  //const [checkedItems, setCheckedItems] = useState([]);

  /*const handleCheckboxChange = (item) => {
    setCheckedItems(prevState =>
      prevState.includes(item)
        ? prevState.filter(checkedItem => checkedItem !== item)
        : [...prevState, item]
    );
  };*/
  const handleAssignVolunteers = () => {
    //const parsed = parseVolunteers(volunteersInput);
    console.log('Assign volunteers: '+JSON.stringify(volunteers))
    //setVolunteers(parsed);

    //setParsedVolunteers(parsed);
  };

  return (
    <table>
      <thead>
        <tr>
          <td class="centered"><h1>{location}</h1></td>
          <td><button onClick={handleAssignVolunteers}>Assign Volunteers</button>
        </td>
        </tr>
        <tr>
          <th class="centered">Id</th>
          <th class="centered">Shift</th>
          <th class="centered">Name</th>
          <th class="centered">Email</th>
          <th class="centered">Phone</th>
          <th class="centered">Assign</th>
          <th class="centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        {volunteers.map(volunteer => (
          <VolunteerCard key={volunteer.id} location={location} volunteer={volunteer} assignmentData={assignmentData} setAssignmentData={setAssignmentData} setVolunteers={setVolunteers} updateVolunteer={updateVolunteer} onSelectionChange={onSelectionChange} />
        ))}
      </tbody>
    </table>
  );
}

export default ListVolunteers;
