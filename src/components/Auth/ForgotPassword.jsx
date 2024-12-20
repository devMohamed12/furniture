import React, { useState } from 'react';
import { supabase } from '../../supabase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      console.error('Error resetting password:', error.message);
    } else {
     }
  };

  return (
    
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
          <h2 className='text-4xl font-bold text-center mb-6'>Forgot Password</h2>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            className='input input-bordered w-full mb-4'
            value={email}
            onChange={handleChange}
          />
          <button className='btn btn-primary w-full' onClick={handlePasswordReset}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;