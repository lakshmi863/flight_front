import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('You have been logged out.');
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center px-4 py-4 ">
      <div className="flex flex-row">
        <h1 className='navStyle font-[jakarta] font-bold text-white'>Fly Globe</h1>
      </div>

      <div>
        <ul className="flex space-x-6 font-[dmsans] text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Business">Business</Link></li>

          {!isLoggedIn && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/Signup">Sign Up</Link></li>
            </>
          )}

          {isLoggedIn && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
