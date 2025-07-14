import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  {
    /* Register */
  }

  const register = async (email, password) => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
    });

    console.log("User created and saved:", user);
  };

  {
    /* login */
  }

  const userLogin = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User logged in:", userCredentials.user);
  };

  {
    /*handle submit */
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword?.value;

    if (!isLogin) {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      setError("");
      await register(email, password);
    } else {
      setError("");
      await userLogin(email, password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 backdrop-blur-sm text-white">
      <div className="w-full bg-black/80 max-w-md p-16 rounded-md">
        <h1 className="text-2xl mb-5 text-center font-bold">
          {isLogin ? "Sign in" : "Sign up"}
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handlerSubmit}>
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
          {error && (
            <div className="bg-red-500 text-white text-center p-2 rounded mb-4">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
