import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 backdrop-blur-sm text-white">
      <div className="w-full max-w-md bg-black bg-opacity-70 p-16  rounded-md">
        <h1 className="text-2xl mb-5 text-center">
          {isLogin ? "Sign in" : "Sign up"}
        </h1>
        <form className="flex flex-col gap-6 " action="">
          <input
            className="outline-1 outline-blue-800 rounded-sm p-1"
            type="email"
            placeholder="Email"
          />
          <input
            className="outline-1 outline-blue-800 rounded-sm p-1"
            type="password"
            placeholder="Password"
          />
          {!isLogin && (
            <input
              className="outline-1 outline-blue-800 rounded-sm p-1"
              type="password"
              placeholder="Confirm Password"
            />
          )}
          <button className="bg-gradient-to-r from-slate-400 to-blue-700 px-2 py-1 rounded-sm">
            {isLogin ? "Log in" : "Sign up"}
          </button>
          <p className="text-center" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
