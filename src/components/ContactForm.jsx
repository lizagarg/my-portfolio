import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xqaqarde");
  if (state.succeeded) {
      return <div className='flex justify-center'><p className='mt-50 px-70 font-mono text-2xl'>Thanks for messaging!</p></div>
  }
  return (
    <div>
        <div className='font-mono font-bold  pt-10 text-2xl'>Contact me</div>
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name" >
      </label>
      <input className='border p-2 border-gray-300 rounded-sm mr-6 w-70 mt-5' 
        id="name"
        type="text" 
        name="name"
        placeholder='Name'
      />
      <label htmlFor="email" >
      </label>
      <input className='border p-2 border-gray-300 rounded-sm w-70 mt-5'
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>
    
      <textarea className='border border-gray-300 pt-1 px-2 mt-9 w-147 h-40'
        id="message"
        name="message"
        placeholder='Message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div>
      <button className='border border-gray-300 mt-6 py-1 px-2 font-mono rounded-sm cursor-pointer hover:bg-red-100'  type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
     
    </form>
    </div>
  );
}
