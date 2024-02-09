import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const VerifyMail = async (event) => {
    event.preventDefault();
    try {
      console.log(email)
      const response = await axios.get("http://localhost:5225/api/User/verify-email/"+email );
      
      if (response.status !==  200) {
        throw new Error('Email not found');
      }

      setIsEmailValid(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Email not found');
    }
  };

  const ResetPassword = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.put('http://localhost:5225/api/User/reset-password', { email, newPassword });

      if (response.status ===  200) {
        alert('Password updated successfully');
        // Clear the form or redirect the user
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
        setIsEmailValid(false);
      } else {
        throw new Error('Failed to update password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update password');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {!isEmailValid ? (
        <form onSubmit={VerifyMail}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Verify</button>
        </form>
      ) : (
        <form onSubmit={ResetPassword}>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Update Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
