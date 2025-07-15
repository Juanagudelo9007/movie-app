
const Login = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 backdrop-blur-sm text-white">
      <div className="w-full bg-black/80 max-w-md p-16 rounded-md">
        <h1 className="text-2xl mb-5 text-center font-bold">
          {isLogin ? "Sign in" : "Sign up"}
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handlerSubmit}>
          {!isLogin && (
            <input
              className="outline-1 outline-blue-800 rounded-sm p-1"
              name="name"
              id="name"
              type="text"
              placeholder="Name"
            />
          )}
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
