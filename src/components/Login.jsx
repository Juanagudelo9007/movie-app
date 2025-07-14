import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase";

const auth = getAuth(app);

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

{/* log in function */}

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    try {
      if (isLogin) {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User log with", userCredentials.user);
      } else if (password !== confirmPassword) {
        <div className="bg-black text-red-600 w-[200px]">
          Passwords do not match
        </div>;
        return;
      }

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        confirmPassword
      );
      console.log("user created with", userCredentials.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 backdrop-blur-sm text-white">
      <div className="w-full bg-black/80  max-w-md p-16  rounded-md">
        <h1 className="text-2xl mb-5 text-center font-bold">
          {isLogin ? "Sign in" : "Sign up"}
        </h1>
        <form className="flex flex-col gap-6 " onSubmit={handlerSubmit}>
          <input
            className="outline-1 outline-blue-800 rounded-sm p-1"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            className="outline-1 outline-blue-800 rounded-sm p-1"
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
          {!isLogin && (
            <input
              className="outline-1 outline-blue-800 rounded-sm p-1"
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          )}
          <button className="bg-gradient-to-r from-sky-700 to-blue-800 px-2 py-1 rounded-sm cursor-pointer">
            {isLogin ? "Log in" : "Sign up"}
          </button>
          <p
            className="text-center cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
