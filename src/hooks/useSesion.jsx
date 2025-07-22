import React from "react";
import { useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase";

export const useSesion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  {
    /* Log Out */
  }

  const closeSesion = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      console.log("Sesión cerrada");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };
  return {
    openMenu,
    isOpen,
    setIsOpen,
    closeSesion,
  };
};
