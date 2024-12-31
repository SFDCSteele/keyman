import React, { useState } from 'react';

function VolunteerCard({ location, assignmentData, setAssignmentData, volunteer, setVolunteers, updateVolunteer, onSelectionChange }) {
  const [isEditing, setIsEditing] = useState(false);
  //const [volunteers, setVolunteers] = useState(volunteer);
  const [editedVolunteer, setEditedVolunteer] = useState(volunteer);
  //const newAssignment = {id: 0, location: '', assignmentTime: '', name: '', email: '', phone: '', assignmentStatus: ''}

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log('save button pushed: '+JSON.stringify(editedVolunteer))
    console.log('save: updating editedVolunteer: '+JSON.stringify(editedVolunteer))

    //setVolunteers(prev => prev.map(c => (c.id === volunteer.id ? editedVolunteer : c)));
    setIsEditing(false);
  };

  /*const handleChange = (e) => {
    console.log('change has occured: name: '+e.target.name+' value: '+ e.target.value)
    setEditedVolunteer({ ...editedVolunteer, [e.target.name]: e.target.value });
    console.log('updating editedVolunteer:: '+JSON.stringify(...editedVolunteer))
    updateVolunteer(volunteer.id, ...editedVolunteer);
  };*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedVolunteer({ ...editedVolunteer, [name]: value });
    console.log('1--child: change: updating editedVolunteer: '+JSON.stringify(editedVolunteer))
  };

  const buildMessage = (brotherSister,lastName,dayOfWeek,date,location,pickUpDropoff) => {
    return `Hello ${brotherSister} ${lastName}, this is Will Steele, the key man for your ${dayOfWeek} ${date} shift at ${location}, would you be willing and able to ${pickUpDropoff} the carts for your shift?  Thank you for your cooperation`
  };

  const splitName = (name) =>  {
    const nameSplit = name.split(' ');
    //const nameCount = nameSplit.length;
    return nameSplit[nameSplit.length-1];

  }

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setEditedVolunteer({ ...editedVolunteer, [name]: value });
    console.log('checkbox has been checked: item: '+e.target.checked)
    console.log('10--child: change has occured: name: '+name+' value: '+ value)
    console.log('11--child: change has occured: target: '+e.target.checked)
    console.log('12--assignmentData: '+JSON.stringify(assignmentData))
    //const specificDate = new Date(assignmentData.date); // Date in "YYYY-MM-DD" format
    //const dayOfWeek = specificDate.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const isSelected = e.target.checked;
    onSelectionChange({ id: volunteer.id, 
      dayOfWeek: days[assignmentData.dayOfWeek],
      date: assignmentData.date,
      location: location, 
      assignmentTime: volunteer.shiftTime, 
      pickUpDropoff: 'Pickup',
      brotherSister: 'Brother',
      name: volunteer.name, 
      email: volunteer.email, 
      phone: volunteer.phone, 
      assignmentStatus: 'Requested', 
      assignmentMessage: buildMessage('Brother',splitName(volunteer.name),days[assignmentData.dayOfWeek],assignmentData.date,location,'Pickup') 
    }, isSelected);
  };


  return (
    <tr>
      <td>{volunteer.id}</td>
      <td>
        {isEditing ? (
          <input type="text" name="shiftTime" value={editedVolunteer.shiftTime} onChange={handleChange} />
        ) : (
          volunteer.shiftTime
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" name="name" value={editedVolunteer.name} onChange={handleChange} />
        ) : (
          volunteer.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="email" name="email" value={editedVolunteer.email} onChange={handleChange} />
        ) : (
          volunteer.email
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="tel" name="phone" value={editedVolunteer.phone} onChange={handleChange} />
        ) : (
          volunteer.phone
        )}
      </td>
      <td>
      <input
              name="assignment"
              type="checkbox"
              checked={editedVolunteer.assignment}
              onChange={handleCheckboxChange}
            />
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </td>
    </tr>
  );
}

export default VolunteerCard;

