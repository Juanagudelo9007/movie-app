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
  const [error, setError] = useState("");

  const auth = getAuth(app);

  {
    /* Handler submit */
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name ? e.target.name.value : "";
    const confirmPassword = e.target.confirmPassword?.value || "";

    console.log(name, email, password);

    {
      /* Password error */
    }

    if (register && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

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
        const userSignIn = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("user logged in:", userSignIn);
      }
    } catch (error) {
      const message = errorMessageFirebase(error.code);
      setError(message);
    }
  };

  {
    /* Handler firebase error */
  }

  const errorMessageFirebase = (code) => {
    switch (code) {
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "User or Password invalid";
      case "auth/email-already-in-use":
        return "Email already use";
      case "auth/invalid-email":
        return "Invalid Email";
      case "auth/weak-password":
        return "Weak password, password needs to have atleast 6 characters";
      default:
        return "An error happened please try again";
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center flex justify-center items-center bg-[url('bg.jpg')]">
      {/* Error message */}
      {error && (
        <div className="absolute z-30  bg-black/40 backdrop-blur-xl w-[250px] h-[120px] flex  flex-col gap-3 justify-center items-center rounded-sm">
          <p className="text-white text-xs">{error}</p>
          <button
            onClick={() => setError("")}
            className="text-xs text-white  bg-red-600 px-2  rounded-sm cursor-pointer"
          >
            ok
          </button>
        </div>
      )}

      {/* Login form */}
      <div className="w-[300px] sm:w-[350px] bg-black/70 backdrop-blur-md  p-6 flex flex-col justify-center items-center gap-6 rounded-lg">
        <h1 className="text-2xl ">{!islogged ? "Login" : "Sign up"}</h1>
        <form
          onSubmit={handlerSubmit}
          action=""
          className="flex flex-col gap-2 "
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
          <button
            className="font-bold px-4-py2 bg-red-500 rounded-sm cursor-pointer"
            type="submit"
          >
            {!islogged ? "Login" : "Sign up "}
          </button>
          <button
            className="underline cursor-pointer"
            type="button"
            onClick={() => {
              setIslogged(!islogged);
              setRegister(!register);
              setError("");
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
