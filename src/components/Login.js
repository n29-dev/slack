import React from 'react';
import { useAuth } from './AuthContext';

export default function Login() {
    const {signIn} = useAuth();

  return (
    <div className='w-full h-full flex items-cener justify-center'>
        <button className='w-[200px] h-[50px] bg-gray-400' onClick={signIn}>
            Login with Google
        </button>
    </div>
  )
}

