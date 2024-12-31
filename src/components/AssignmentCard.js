import React, { useState, useEffect } from 'react';


function AssignmentCard({ location, assignmentData, setAssignmentData, assignment, assignmentMessage, setAssignmentMessage }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAssignment, setEditedAssignment] = useState(assignment);
  //const [outputMessage, setOutputMessage] = useState({message: "test"});
  /*const [outputMessage, setOutputMessage] = useState({
    message: ''
  });*/
  const [outputMessage, setOutputMessage] = useState('Select Brother/Sister and Pickup/Drop off');
  
  /*
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log('save button pushed: '+JSON.stringify(editedAssignment))
    console.log('save: updating editedAssignment: '+JSON.stringify(editedAssignment))
    setIsEditing(false);
  };

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
      }
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

  // Update the first name based on the selected title
  /*useEffect(() => {
      //console.log('10--useEffect:editedAssignment: '+JSON.stringify(editedAssignment))
      //console.log('11--useEffect:assignment: '+JSON.stringify(assignment))
      console.log('12--useEffect:assignment: '+assignment.brotherSister)
      if (assignment.brotherSister === 'Brother') {
      setEditedAssignment((prevState) => ({
        ...prevState,
        assignmentMessage: 'John'
      }));
    } else if (assignment.brotherSister === 'Sister') {
      setEditedAssignment((prevState) => ({
        ...prevState,
        assignmentMessage: 'Jane'
      }));
    }
  }, [assignment.brotherSister]); // Effect runs when 'title' changes
  */
  useEffect(() => {
    console.log('xxx--useEffect:outputMessage: '+outputMessage);
    //setOutputMessage(assignment.brotherSister);
}, [outputMessage]);

  const buildMessage = (brotherSister,lastName,dayOfWeek,date,location,pickUpDropoff) => {
    //const name = 'test name'
    //const newAssignmentMessage = `Hello {brotherSister} {lastName}, this is Will Steele, the key man for your {dayOfWeek} {date} shift at ${location}, would you be willing and able to {pickUpDropoff} the carts for your shift?  Thank you for your cooperation`
    //return newAssignmentMessage;
    return `Hello ${brotherSister} ${lastName}, this is Will Steele, the key man for your ${dayOfWeek} ${date} shift at ${location}, would you be willing and able to ${pickUpDropoff} the carts for your shift?  Thank you for your cooperation`
    //return `Hello ${brotherSister} ${lastName}, this is Will Steele, the key man for your ${assignment.dayOfWeek} ${assignment.date} shift at ${location}, would you be willing and able to ${pickUpDropoff} the carts for your shift?  Thank you for your cooperation`
    //return "Hello {brotherSister} {lastName}, this is Will Steele, the key man for your {dayOfWeek} {date} shift at {location}, would you be willing and able to {pickUpDropoff} the carts for your shift?  Thank you for your cooperation";
    //return assignmentMessage;
  };
  
  const handleInputChange = (e) => {
    console.log('YYY-1--handleInputChange:assignment: '+JSON.stringify(assignment));
    const { name, value } = e.target;
    console.log('YYY-2--handleInputChange:name: '+name+' value: '+value);
    setEditedAssignment({
      ...editedAssignment,
      [name]: value
    });
    if ( name === 'brotherSister' ) {
        setOutputMessage(
          buildMessage(value,splitName(assignment.name),assignment.dayOfWeek,assignment.date,assignment.location,editedAssignment.pickUpDropoff)
        );
      } else if (name === 'pickUpDropoff') {
        setOutputMessage(
          buildMessage(editedAssignment.brotherSister,splitName(assignment.name),assignment.dayOfWeek,assignment.date,assignment.location,value)
        );
      }
    //setEditedAssignment({ ...editedAssignment, [name]: value });
    console.log('YYY-3--handleInputChange:editedAssignment: '+JSON.stringify(editedAssignment));
  };

  const splitName = (name) =>  {
    const nameSplit = name.split(' ');
    //const nameCount = nameSplit.length;
    return nameSplit[nameSplit.length-1];

  }



  return (

    <><tr>
      <td>{assignment.id}</td>
      <td>
        {isEditing ? (
          <input type="text" name="location" value={editedAssignment.location} onChange={handleInputChange} />
        ) : (
          assignment.location
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" name="assignmentTime" value={editedAssignment.assignmentTime} onChange={handleInputChange} />
        ) : (
          assignment.assignmentTime
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" name="name" value={editedAssignment.name} onChange={handleInputChange} />
        ) : (
          assignment.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="tel" name="phone" value={editedAssignment.phone} onChange={handleInputChange} />
        ) : (
          assignment.phone
        )}
      </td>
      <td>
        <select
          name="brotherSister"
          value={editedAssignment.brotherSister}
          onChange={handleInputChange}
        >
          <option value="Brother">Brother</option>
          <option value="Sister">Sister</option>
          <option value="Brothers">Brothers</option>
          <option value="Sisters">Sisters</option>
        </select>
      </td>
      <td>
        <select
          name="pickUpDropoff"
          value={editedAssignment.pickUpDropoff}
          onChange={handleInputChange}
        >
          <option value="Pick up">Pick up</option>
          <option value="Drop off">Drop off</option>
          <option value="Pick up AND Drop off">Pick up AND Drop off</option>
        </select>
      </td>
    </tr><tr>
        <td colSpan="6">
          {outputMessage}
        </td>
      </tr></>
  );
}

export default AssignmentCard;

