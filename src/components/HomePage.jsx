import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import {LoginContext} from '../Context/UserLogin'
import { useContext } from "react"





const HomePage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState(true);

const {user} = useContext(LoginContext)

  useEffect(() => {
    const showMesssage = setTimeout(() => {
      setWelcomeMessage(false);
    }, 6000);
    return () => clearTimeout(showMesssage);
  }, []);

  console.log(user.displayName);
  return (
    <div className="min-h-screen bg-no-repeat  bg-fixed bg-cover bg-center bg-[url('/hero-bg.png')]">
      <Navbar />
      {user?.displayName && welcomeMessage && (
        <div className="flex justify-center  bg-transparent">
          <div className=" w-[250px] h-[50px] bg-transparent flex justify-center items-center ">
            <p className="text-white text-md sm:text-2xl font-bold">
              Welcome {user?.displayName}
            </p>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default HomePage;
