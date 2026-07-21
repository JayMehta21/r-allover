import React from 'react'

const Login = ({ setIsLogin }) => {
  return (
    <div className="bg-white w-90 p-6 rounded-4xl">
      <h1 className="mb-2.5 text-2xl font-bold">Login</h1>

      <form className="flex flex-col gap-5">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded-lg"
        />

        <button className="bg-yellow-500 text-white py-2 rounded-lg cursor-pointer">
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <span
            onClick={() => setIsLogin(false)}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;