import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from "date-fns";

import 'react-datepicker/dist/react-datepicker.css';

const VolunteersTable = ({location, assignmentData, setAssignmentData, volunteers, setVolunteers}) => {
  const [volunteersInput, setVolunteersInput] = useState('');
  const [parsedVolunteers, setParsedVolunteers] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  //const [selectedAction, setSelectedAction] = useState('');

  const handleDateChange = (date) => {
    const specificDate = new Date(format(date,'MM/dd/yyyy')); // Date in "YYYY-MM-DD" format
    const dayOfWeek = specificDate.getDay();
    setSelectedDate(date);
    setAssignmentData({ ...assignmentData, date: format(date,'MM/dd/yyyy'), dayOfWeek: dayOfWeek  });
    //setAssignmentData({ ...assignmentData, dayOfWeek: dayOfWeek });
  };
  
  // Parse the volunteers string into an array of objects
  const parseVolunteers = (volunteers) => {
    console.log('0-'+volunteers)
    const linesIn = volunteers.trim().split('\n');
    const linesOut = linesIn.filter((str) => str.length > 4 
        //&& str.indexOf(':') <= 0
        //&& str.indexOf(' - ') <= 0
        && str.indexOf('Time Away') < 0
        && str.indexOf('Open - Key Man') < 0
      )
    /*
    const lineOut = []
    for ( const line of linesIn ) {
      if ( line.length > 0 && line.indexOf('-') === 3 ) {
        lineOut.push(line)
      } else if ( line.length > 0 && line.indexOf('Accepted') === 0 ) {
          lineOut.push(line)
          linesOut.push(lineOut)
      }
    }
    */
    console.log('1-'+JSON.stringify(linesOut))
    const linesCondense = []
    let lineCondense = []
    let shiftTime = ''
    for ( let i = 0,col = 0, line = 0; i < linesOut.length; i++ ) {
      //console.log(''+(i+1)+'- line: '+linesOut[i])
      console.log('2-0-col: '+col)
      //if ( col === 0) {
      if ( col === 0 && linesOut[i].indexOf(':') >= 0) {
        //lineCondense.push({ index: index++})
        //lineCondense.push({ name: linesOut[i]})
        shiftTime = linesOut[i]
        //lineCondense.push(shiftTime)
        //++col
        console.log('3.1-1-col: '+col+' lineCondense: '+JSON.stringify(lineCondense))
      } else if ( col === 0 && linesOut[i].indexOf(':') <= 0) {
        lineCondense.push(shiftTime)
        lineCondense.push(linesOut[i])
        ++col
        console.log('3.2-1-col: '+col+' lineCondense: '+JSON.stringify(lineCondense))
     } else if ( col === 1 ) {
        //lineCondense.push({ phone: linesOut[i] })
        lineCondense.push(linesOut[i])
        ++col
        console.log('4-2-col: '+col+' lineCondense: '+JSON.stringify(lineCondense))
      } else if ( col === 2 ) {
        //lineCondense.push({ status: linesOut[i] })
        lineCondense.push(linesOut[i])
        console.log('5-3-col: '+col+' lineCondense: '+JSON.stringify(lineCondense))
        console.log(''+(i+1)+'- linesCondense: '+linesOut[i])
        linesCondense.push(lineCondense)
        ++line
        col=0
        lineCondense = []
      }
  
    }
    console.log('6-linesCondense: '+JSON.stringify(linesCondense))
    /* */
    return linesCondense.map((line, index) => {
      //const [name, phone, status] = line.map((item) => item);
      //return { id: index + 1, name, phone, status };
      const [shiftTime, name, phone, status] = line.map((item) => item);
      return { id: index + 1, shiftTime, name, phone, assignment: '', status };
    });
    /* */
  /* 
  const lines = volunteers.trim().split('\n');
    return lines.map((line, index) => {
        const [name, email, phone] = line.split(',').map((item) => item.trim());
        return { id: index + 1, name, email, phone };
    });
     */
  };
  

  const handleVolunteersInputChange = (event) => {
    setVolunteersInput(event.target.value);
  };

  const handleParseVolunteers = () => {
    setAssignmentData({ ...assignmentData, location: location });
    const parsed = parseVolunteers(volunteersInput);
    console.log('parsed volunteers: '+JSON.stringify(parsed))
    setVolunteers(parsed);

    setParsedVolunteers(parsed);
  };

  return (
    <div>
      <h2>Volunteer List</h2>
      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="">Select Location</option>
        <option value="Battery">Battery</option>
        <option value="Broad">Broad</option>
        <option value="College">College</option>
        <option value="Exchange">Exchange</option>
      </select>
      <br />
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
      />
      <br />
      <textarea
        rows="5"
        cols="50"
        value={volunteersInput}
        onChange={handleVolunteersInputChange}
        placeholder="Enter volunteers in CSV format (Name, Email, Phone)"
      />
      <br />
      <button onClick={handleParseVolunteers}>Parse Volunteers</button>
      <table>
        <tbody><tr>
          <td><b>Location:</b></td>
          <td>{selectedLocation}</td>
          <td><b>Assignment Date:</b></td>
          <td>{selectedDate ? format(selectedDate,'MM/dd/yyyy') : null}</td>
          <td><b>{selectedDate ? format(selectedDate,"eeee") : null}</b></td>
        </tr></tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Shift</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parsedVolunteers.map((volunteer) => (
            <tr key={volunteer.id}>
              <td>{volunteer.id}</td>
              <td>{volunteer.shiftTime}</td>
              <td>{volunteer.name}</td>
              <td>{volunteer.phone}</td>
              <td>{volunteer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
/*
              <td>
                <select
                    value={selectedAction}
                    onChange={(e) => setSelectedAction(e.target.value)}
                  >
                    <option value="">Select Action</option>
                    <option value="Pick up">Pick up</option>
                    <option value="Drop off">Drop off</option>
                    <option value="Pick up AND Drop off">Pick up AND Drop off</option>
                </select>
              </td>

*/

export default VolunteersTable;