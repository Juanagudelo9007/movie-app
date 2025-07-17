import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black/40  ">
      <div className=" w-[350px] max-w[200px] bg-black/80   p-12 flex flex-col justify-center items-center gap-6 rounded-lg">
        <h1 className="text-2xl ">Login</h1>
        <form action="" className="flex flex-col gap-3 ">
          <input
            className="outline-0 border-0 border-b border-white bg-transparent "
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
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
          <input
            className="outline-0 border-0 border-b border-white bg-transparent "
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="ConfirmPassword"
          />
          <button>Login</button>
          <a className="underline s" href="">
            Dont have an account?{" "}
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
