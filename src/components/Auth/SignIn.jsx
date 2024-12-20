import React, { useState } from 'react';
import { supabase } from '../../supabase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSignIn = async () => {
      const { email, password } = formData;
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) console.error('Error signing in:', error.message);
      else {
        console.log('User signed in:', user);
        dispatch(setUser(user));
      }
    };

  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
          <h2 className='text-4xl font-bold text-center mb-6'>Sign In</h2>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='input input-bordered w-full mb-4'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='input input-bordered w-full mb-6'
            value={formData.password}
            onChange={handleChange}
          />
          <button className='btn btn-primary w-full' onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;