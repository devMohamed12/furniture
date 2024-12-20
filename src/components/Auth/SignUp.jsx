import React, { useState } from 'react'
import { supabase } from '../../supabase'
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({
        ...formData,
        [name]: value,
      })
    }

    const handleSignUp = async () => {
      const { email, password } = formData
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: 'ecommerce_user',
          },
        },
      })
      if (error) console.error('Error signing up:', error.message)
      else {
         dispatch(setUser(data))
      }
    }

  const handleGoogleSignUp = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) console.error('Error signing in with Google:', error.message)
   }

  return (
    
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
          <h2 className='text-4xl font-bold text-center mb-6'>Sign Up</h2>
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='input input-bordered w-full mb-4'
            value={formData.username}
            onChange={handleChange}
          />
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
            className='input input-bordered w-full mb-4'
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            className='input input-bordered w-full mb-6'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button className='btn btn-primary w-full mb-4' onClick={handleSignUp}>
            Sign Up
          </button>
          <div className='divider'>OR</div>
          <button className='btn btn-secondary w-full' onClick={handleGoogleSignUp}>
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp