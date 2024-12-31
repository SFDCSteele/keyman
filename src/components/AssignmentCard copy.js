import React, { useState, useEffect } from 'react';

function AssignmentCard({ location, assignmentData, setAssignmentData, assignment, assignmentMessage, setAssignmentMessage }) {
  const [isEditing, setIsEditing] = useState(false);
  //const [assignments, setAssignments] = useState(assignment);
  const [editedAssignment, setEditedAssignment] = useState(assignment);
  //const newAssignment = {id: 0, location: '', assignmentTime: '', name: '', email: '', phone: '', assignmentStatus: ''}
  //let brotherSister = 'Brother';
  //const dayOfWeek = 'Saturday';
  //let pickUpDropoff = 'Pickup';
  

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log('save button pushed: '+JSON.stringify(editedAssignment))
    console.log('save: updating editedAssignment: '+JSON.stringify(editedAssignment))

    //setAssignments(prev => prev.map(c => (c.id === assignment.id ? editedAssignment : c)));
    setIsEditing(false);
  };

  /*const handleChange = (e) => {
    console.log('change has occured: name: '+e.target.name+' value: '+ e.target.value)
    setEditedAssignment({ ...editedAssignment, [e.target.name]: e.target.value });
    console.log('updating editedAssignment:: '+JSON.stringify(...editedAssignment))
    updateAssignment(assignment.id, ...editedAssignment);
  };*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAssignment({ ...editedAssignment, [name]: value });
    switch (name) {
      case 'brotherSister':
        assignment.brotherSister = value;
        break;
      case 'puDrpoff':
        assignment.pickUpDropoff = value;
        break;
      default:
      break;
    }
    console.log('1--child: change: updating editedAssignment: '+JSON.stringify(editedAssignment))
    console.log('2--name: '+name+' value: '+value);
    
  };

    // Update the first name based on the selected title
    
    useEffect(() => {
      //console.log('10--useEffect:editedAssignment: '+JSON.stringify(editedAssignment))
      //console.log('11--useEffect:assignment: '+JSON.stringify(assignment))
      //console.log('12--useEffect:assignment: '+assignment.assignmentMessage)

      //setEditedAssignment({ ...editedAssignment, [assignment.assignmentMessage]: buildMessage(assignment.brotherSister,assignment.name,assignment.dayOfWeek,assignment.date,assignment.location,assignment.pickUpDropoff)  });
      /*if (assignment.title === 'Mr.') {
        setEditedAssignment((prevState) => ({
          ...prevState,
          assignmentMessage: 'John'
        }));
      } else if (assignment.title === 'Mrs.') {
        setEditedAssignment((prevState) => ({
          ...prevState,
          assignmentMessage: 'Jane'
        }));
      }*/
        setEditedAssignment((prevState) => ({
          ...prevState,
          assignmentMessage: 'John'
        }));
    }, [assignment.brotherSister]); // Effect runs when 'title' changes
  
  
  const buildMessage = (brotherSister,lastName,dayOfWeek,date,location,pickUpDropoff) => {
    //const name = 'test name'
    //const newAssignmentMessage = `Hello {brotherSister} {lastName}, this is Will Steele, the key man for your {dayOfWeek} {date} shift at ${location}, would you be willing and able to {pickUpDropoff} the carts for your shift?  Thank you for your cooperation`
    //return newAssignmentMessage;
    return `Hello ${brotherSister} ${lastName}, this is Will Steele, the key man for your ${dayOfWeek} ${date} shift at ${location}, would you be willing and able to ${pickUpDropoff} the carts for your shift?  Thank you for your cooperation`
    //return `Hello ${brotherSister} ${lastName}, this is Will Steele, the key man for your ${assignment.dayOfWeek} ${assignment.date} shift at ${location}, would you be willing and able to ${pickUpDropoff} the carts for your shift?  Thank you for your cooperation`
    //return "Hello {brotherSister} {lastName}, this is Will Steele, the key man for your {dayOfWeek} {date} shift at {location}, would you be willing and able to {pickUpDropoff} the carts for your shift?  Thank you for your cooperation";
    //return assignmentMessage;
  };

  /*
  const replacePlaceholders = (str, values) => {
    let str2 = ""+str;
    return ""+str2.replace(/{(.*?)}/g, (_, key) => values[key] || '');
  };
  
  const buildMessage = replacePlaceholders(
    assignmentMessage,
    { location, name }
  );  

  
  const buildMessage = (m) => {
    return ''+m.replace("{location}", location);//.replace("{age}", age)
  };*/
  /*const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setEditedAssignment({ ...editedAssignment, [name]: value });
    console.log('checkbox has been checked: item: '+e.target.checked)
    console.log('10--child: change has occured: name: '+name+' value: '+ value)
    console.log('11--child: change has occured: target: '+e.target.checked)
    const isSelected = e.target.checked;
    onSelectionChange({ id: assignment.id, 
      location: location, 
      assignmentTime: assignment.shiftTime, 
      name: assignment.name, 
      email: assignment.email, 
      phone: assignment.phone, 
      assignmentStatus: 'Requested' }, isSelected);

      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </td>
          {buildMessage(assignment.location,assignment.name)}

      };*/


  return (

    <><tr>
      <td>{assignment.id}</td>
      <td>
        {isEditing ? (
          <input type="text" name="location" value={editedAssignment.location} onChange={handleChange} />
        ) : (
          assignment.location
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" name="assignmentTime" value={editedAssignment.assignmentTime} onChange={handleChange} />
        ) : (
          assignment.assignmentTime
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" name="name" value={editedAssignment.name} onChange={handleChange} />
        ) : (
          assignment.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="tel" name="phone" value={editedAssignment.phone} onChange={handleChange} />
        ) : (
          assignment.phone
        )}
      </td>
      <td>
        <select
          name="brotherSister"
          value={assignment.brotherSister}
          onChange={handleChange}
        >
          <option value="Brother">Brother</option>
          <option value="Sister">Sister</option>
          <option value="Brothers">Brothers</option>
          <option value="Sisters">Sisters</option>
        </select>
      </td>
      <td>
        <select
          name="puDrpoff"
          value={assignment.pickUpDropoff}
          onChange={handleChange}
        >
          <option value="Pick up">Pick up</option>
          <option value="Drop off">Drop off</option>
          <option value="Pick up AND Drop off">Pick up AND Drop off</option>
        </select>
      </td>
    </tr><tr>
        <td colSpan="7">
          {assignment.assignmentMessage}
        </td>
      </tr></>
  );
}

export default AssignmentCard;

