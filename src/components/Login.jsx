import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/loginSlice";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({email,password}))
    navigate("/")
    setEmail("")
    setPassword("")
  };

  return (
    <div className="max-w-[400px] mx-auto mt-48">
      <div className="text-red-700 text-6xl place-items-center mb-6">
        {" "}
        <FaUser />
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="text-gray-700">Email</label>
        <input
          className="border border-gray-300 rounded px-2 py-1 my-2 outline-none focus:border-none focus:ring-2 focus:ring-red-700 text-gray-700 transform transition-all duration-300 focus:scale-101"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-gray-700">Password</label>
        <input
          type="text"
          placeholder="Password"
          className="border border-gray-300 rounded px-2 py-1 my-2 outline-none focus:border-none focus:ring-2 focus:ring-red-700 text-gray-700 transform transition-all duration-300 focus:scale-101"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-700 text-white rounded-xl p-1 uppercase mt-4 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
