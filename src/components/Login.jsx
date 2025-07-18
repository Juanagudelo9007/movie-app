import React, { useState } from "react";
import { app } from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [islogged, setIslogged] = useState(false);
  const [register, setRegister] = useState(false);

  const auth = getAuth(app);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(name, password, email);
    try {
      if (register) {
        const credentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(credentials.user, { displayName: name });
        console.log("user created with", credentials.user.displayName);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black/10  backdrop-blur-xl ">
      <div className="w-[300px] sm:w-[350px] bg-black/40   p-12 flex flex-col justify-center items-center gap-6 rounded-lg">
        <h1 className="text-2xl ">{!islogged ? "Login" : "Sign up"}</h1>
        <form
          onSubmit={handlerSubmit}
          action=""
          className="flex flex-col gap-3 "
        >
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
              placeholder="Confirm Password"
            />
          )}
          <button type="submit">{!islogged ? "login" : "sign up "}</button>
          <button
            className="underline s"
            type="button"
            onClick={() => {
              setIslogged(!islogged);
              setRegister(!register);
            }}
          >
            {!islogged ? " Dont have an account?" : "Already have an account?"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
