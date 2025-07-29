import { useAuthForm } from "../hooks/useAuthForm";
import { motion } from "framer-motion";

const Login = () => {
  const {
    error,
    setError,
    islogged,
    register,
    handlerSubmit,
    setIslogged,
    setRegister,
  } = useAuthForm();

  return (
    <div className="relative min-h-screen bg-cover bg-center flex justify-center items-center bg-[url('bg.jpg')]">
      {/* Error message. */}
      {error && (
        <div className="absolute z-30  bg-black/40 backdrop-blur-xl w-[250px] h-[120px] flex  flex-col gap-3 justify-center items-center rounded-sm">
          <p className="text-white text-xs">{error}</p>
          <motion.button
            onClick={() => setError("")}
            className="text-xs text-white  bg-red-600 px-2  rounded-sm cursor-pointer"
            whileHover={{
              backgroundColor: "#9C1E07",
            }}
            whileTap={{
              scale: 0.75,
            }}
            transition={{
              duration: 0.33,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            ok
          </motion.button>
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
          <motion.button
            className="font-bold px-4 -py2 bg-red-500 rounded-sm cursor-pointer"
            type="submit"
            whileHover={{
              backgroundColor: "#9C1E07",
            }}
            whileTap={{
              scale: 0.75,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {!islogged ? "Login" : "Sign up "}
          </motion.button>
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
