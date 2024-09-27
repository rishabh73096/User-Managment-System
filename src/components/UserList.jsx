import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users", er);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const handleDelete = async (id) => {
    if (!id) {
      alert("Invalid user ID");
      return;
    }

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`); // Use backticks here
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      alert("Error deleting user: ", error);
    }
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">User List</h2>
        <Link
          to="/create"
          className="inline-block mb-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Create User
        </Link>
        <div className="border-4 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.phone}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <Link
                      to={`/edit/${user.id}`}
                      className="hover:text-blue-300 bg-blue-700 text-white px-5 p-3 rounded"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="hover:text-red-400 bg-blue-600 text-white p-3 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
