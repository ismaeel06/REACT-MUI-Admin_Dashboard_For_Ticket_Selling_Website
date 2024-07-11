import React, { useState } from 'react';
import { Container, Box, Button, TextField, Alert, InputAdornment,IconButton } from '@mui/material';
import {Visibility,VisibilityOff} from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { addUser } from '../../app/slices/usersTableSlice';
import axios from 'axios';

const AddUsers = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    email: '',
    password: '12345678'
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('info');
  const [showPassword, setShowPassword] = useState(true);

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
    else {
    try {
      axios.post('http://localhost:5000/api/users/register', formData)
        .then((res) => {
          setFormData({
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          state: '',
          email: '',
          password: '12345678'
          });
          // Show success message
          window.alert("User Added Succesfully")
          window.location.reload();

        })
        .catch((error) => {
          setShowAlert(true);
          setAlertMessage(error.response.data);
          setAlertSeverity('error');

        })
        ;
    } catch (error) {
      
        setShowAlert(true);
        setAlertMessage('Invalid User Data');
        setAlertSeverity('error');

    }
    
  }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
          <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          defaultValue='12345678'
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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