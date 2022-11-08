import React from 'react'

export default function Login() {
  return (
    <div className='bg-white pt-28 pb-28'>
        <div className="bg-slate-700 rounded p-10 text-center shadow-md mx-auto w-3/5">
       <p className="text-xl">Login User</p>
       <div className="my-4 text-left">
        <label for="email" className="text-white">Email:</label>
        <input type="text"  className="border block w-full outline-none p-2 mt-2 text-black rounded" id="email" placeholder="Enter Email"/>
       </div>
       <div className="my-4 text-left">
        <label for="password" className="text-white">Password:</label>
        <input type="password" className="border block outline-none w-full p-2 mt-2 text-black rounded" id="password" placeholder="Enter password"/> 
       </div>
      <button id="btn" className="bg-black text-white py-2 mt-4 inline-block w-full rounded" type="submit">Submit</button>
     </div>
    </div>
  )
}
