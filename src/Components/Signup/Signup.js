import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Correct API Endpoint
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/auth/signup`, userData);

      if (response.status === 201) {
        alert('Signup successful! Please login.');
        navigate('/login');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert('Signup failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSignup} className="flex flex-col p-6 border rounded-lg w-80 gap-4">
        <h2 className="text-2xl font-bold text-center">Signup</h2>

        <input
          type="text"
          placeholder="Name"
          required
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          className="p-2 border rounded"
        />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
