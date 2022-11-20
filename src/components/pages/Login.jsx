import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { login } = useContext(UserContext);
  function handleForm(e) {
    e.preventDefault();

    const { username, password } = e.target.elements;

    login(username.value, password.value);

    username.value = "";
    password.value = "";
  }
  console.log(loading);
  return (
    <>
      <div className="bg-white pt-28 pb-28">
        <div className="bg-slate-700 rounded p-10 text-center shadow-md mx-auto w-3/5">
          <p className="text-xl">Login User</p>
          <form action="/" onSubmit={handleForm}>
            <div className="my-4 text-left">
              <label for="userName" className="text-white">
                Username:
              </label>
              <input
                type="text"
                className="border block w-full outline-none p-2 mt-2 text-black rounded"
                id="userName"
                placeholder="Enter Username"
                name="username"
              />
            </div>
            <div className="my-4 text-left">
              <label for="password" className="text-white">
                Password:
              </label>
              <input
                type="password"
                className="border block outline-none w-full p-2 mt-2 text-black rounded"
                id="password"
                placeholder="Enter password"
                name="password"
              />
            </div>
            <input
              id="btn"
              className="bg-black text-white py-2 mt-4 inline-block w-full rounded"
              type="submit"
              value="submit"
              onClick={() => setLoading(true)}
            />
          </form>
        </div>
      </div>
    </>
  );
}