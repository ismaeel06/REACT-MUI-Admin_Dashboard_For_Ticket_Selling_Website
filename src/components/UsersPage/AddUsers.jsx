import React, { useState } from 'react';
import { Container, Box, Button, TextField, Alert } from '@mui/material';
import { useUsers } from '../../context/UsersDataContext';

const AddUsers = () => {
  const { addUser } = useUsers();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    email: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('info');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (Object.values(formData).some(field => field === '')) {
      setShowAlert(true);
      setAlertMessage('Please Fill Out All Fields!');
      setAlertSeverity('error');
      return;
    }
    console.log(formData); // Process the form data as needed
    addUser(formData); // Add user to context
    // Reset form if necessary
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      email: ''
    });
    // Show success message
    setShowAlert(true);
    setAlertMessage('User Added Successfully');
    setAlertSeverity('success');
  };

  return (
    <Container disableGutters>
      {showAlert && <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>{alertMessage}</Alert>}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, backgroundColor: 'white', borderRadius: '5px', paddingX: '16px', marginBottom: '16px' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="fname"
          autoFocus
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="address"
          label="Address"
          name="address"
          autoComplete="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          autoComplete="city"
          value={formData.city}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="state"
          label="State"
          name="state"
          autoComplete="state"
          value={formData.state}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: '#088395', color: 'white' }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AddUsers;