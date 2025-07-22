import React from "react";
import { useState } from "react";
import { app } from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const useAuthForm = () => {
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

  return {
    setError,
    error,
    setRegister,
    register,
    handlerSubmit,
    errorMessageFirebase,
    islogged,
    setIslogged,
  };
};
