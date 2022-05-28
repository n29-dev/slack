import React from 'react';
import { useAuth } from '../Contexts/AuthContext';
import SlackIcon from './SlackIcon'


export default function Login() {
  
  const {signIn} = useAuth();
  
  return (
    <main className='w-full h-full flex items-center justify-center'>
      <div>
        <figure className='w-[400px] h-auto mb-8'>
          <SlackIcon/>
        </figure>
        <button className='w-[300px] h-[50px] border-2 border-gray-300 rounded text-gray-500 font-semibold block mx-auto hover:opacity-80'  onClick={signIn}>
            Login with Google
        </button>
      </div>
    </main>
  )
}
