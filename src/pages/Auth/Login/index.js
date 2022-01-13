import React from "react";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div className="py-16 px-24">
      <h1 className="text-2xl text-gray-700 mb-6">
        Start Accessing Banking Needs With All Devices and All Platforms With
        30.000+ Users
      </h1>
      <p className="text-gray-500">
        Transfering money is eassier than ever, you can access Zwallet wherever
        you are. Desktop, laptop, mobile phone? we cover all of that for you!
      </p>
      <div className="mt-5">
          <Input placeholder="Enter your e-mail"/>
          <Input placeholder="Enter your password"/>

          <button className="py-3 px-5 bg-gray-400 text-white w-full rounded-lg mt-10">Login</button>
        <p>anda belum register silah klik <Link to="/auth/register">register</Link></p>
      </div>
    </div>
  );
};

export default Login;
