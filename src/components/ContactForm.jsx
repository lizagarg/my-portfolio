import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xqaqarde");
  if (state.succeeded) {
    return (
      <div className="flex justify-center">
        <p className="mt-12 px-8 font-mono text-2xl">Thanks for messaging!</p>
      </div>
    );
  }

  return (
    <div className="flex-1 px-4 py-6 sm:px-8">
      <div className="font-mono font-bold text-2xl dark:text-white mb-6">
        Contact Me
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-2 border-gray-300 rounded-sm w-full dark:border-yellow-100 dark:text-white"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="border p-2 border-gray-300 rounded-sm w-full dark:border-yellow-100 dark:text-white"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="border border-gray-300 p-2 w-full h-40 dark:border-yellow-100 dark:text-white rounded-sm"
          id="message"
          name="message"
          placeholder="Message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="border dark:bg-yellow-200 border-gray-300 py-2 px-4 font-mono rounded-sm cursor-pointer hover:bg-red-100"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
