import React, { useEffect, useState } from "react";

const Register = ({ setIsLogin }) => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "hhhhhhh",
    email: "",
    password: "",
  });

  // State to store all registered users
  // ✅ use [] because useState returns an array
  const [users, setUsers] = useState([]);

  // Runs whenever the users array changes
  useEffect(() => {
    console.log("Updated Users:", users);
  }, [users]);

  // Handles all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update only the field that changed
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new user to the users array
    // Using functional update avoids stale state issues
    setUsers((prevUsers) => [...prevUsers, formData]);

    // Clear the form after successful registration
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="bg-white w-90 p-6 rounded-4xl">
      <h1 className="mb-2.5 text-2xl font-bold">Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Name Input */}
        <input
        //value - two way binding 
          value={formData.name}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        {/* Email Input */}
        <input
        //value -> two way binding 
        value={formData.email}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        {/* Password Input */}
        <input
        //value -> two wway binding telling react this is data you are getting back 
        value={formData.password}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 rounded-lg cursor-pointer"
        >
          Register
        </button>

        {/* Switch back to Login */}
        <p>
          Already have an account?{" "}
          <span
            onClick={() => setIsLogin(true)}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;