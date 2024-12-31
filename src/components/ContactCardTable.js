import React, { useState, useEffect } from 'react';

const ContactCardTable = () => {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  // Update the first name based on the selected title
  useEffect(() => {
    if (formData.title === 'Mr.') {
      setFormData((prevState) => ({
        ...prevState,
        firstName: 'John'
      }));
    } else if (formData.title === 'Mrs.') {
      setFormData((prevState) => ({
        ...prevState,
        firstName: 'Jane'
      }));
    }
  }, [formData.title]); // Effect runs when 'title' changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data: ', formData);
  };

  return (
    <div>
      <h2>Contact Card</h2>
      <form onSubmit={handleSubmit}>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td>
                <label>
                  Title:
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    style={inputStyle}
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                  </select>
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                  />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

// Styles
const tableStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  margin: '0 auto',
};

const inputStyle = {
  margin: '10px 0',
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box'
};

const buttonStyle = {
  marginTop: '15px',
  padding: '10px 15px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default ContactCardTable;
