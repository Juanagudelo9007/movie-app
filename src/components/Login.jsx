import React, { useState } from "react";

const Login = () => {
  const [islogged, setIslogged] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-black/10  backdrop-blur-xl ">
      <div className=" w-[350px] max-w-[300px] bg-black/80   p-12 flex flex-col justify-center items-center gap-6 rounded-lg">
        <h1 className="text-2xl ">{!islogged ? "Login" : "Sign up"}</h1>
        <form action="" className="flex flex-col gap-3 ">
          {islogged && (
            <input
              className="outline-0 border-0 border-b border-white bg-transparent "
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          )}
          <input
            className="outline-0 border-0 border-b border-white bg-transparent "
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="outline-0 border-0 border-b border-white bg-transparent "
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          {islogged && (
            <input
              className="outline-0 border-0 border-b border-white bg-transparent "
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="ConfirmPassword"
            />
          )}
          <button type="submit" onClick={() => setIslogged(!islogged)}>
            {!islogged ? "login" : "sign up "}
          </button>
          <button
            className="underline s"
            type="button"
            onClick={() => setIslogged(!islogged)}
          >
            {!islogged ? " Dont have an account?" : "Already have an account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
