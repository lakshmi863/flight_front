import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/auth/login`, credentials);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="flex flex-col p-6 border rounded-lg w-80 gap-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="p-2 border rounded"
        />

        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>

        {/* Signup Option */}
        <div className="text-center">
          <p>Don't have an account? <Link to="/signup" className="text-blue-600 underline">Signup</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
