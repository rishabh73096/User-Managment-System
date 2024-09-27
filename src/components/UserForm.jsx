import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = ({ existingUser }) => {
  const [user, setUser] = useState(
    existingUser || { name: "", email: "", phone: "" }
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (existingUser) {
        await axios.put(
          `https://jsonplaceholder.typicode.com/users/${user.id}`,
          user
        );
      } else {
        await axios.post("https://jsonplaceholder.typicode.com/users", user);
      }
      alert(`User ${existingUser ? "updated" : "created"} successfully!`);
      setUser({ name: "", email: "", phone: "" });
      navigate("/");
    } catch (error) {
      alert("Error saving user: " + error);
    }
  };

  return (
    <>
      <form
        className="max-w-md mx-auto space-y-4 bg-white p-6 rounded-lg shadow-md mt-10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          {existingUser ? "Edit User" : "Create User"}
        </h2>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          {existingUser ? "Update" : "Create"}
        </button>
      </form>
    </>
  );
};

export default UserForm;
