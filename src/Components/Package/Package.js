import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHotel, FaMapMarkedAlt, FaUtensils, FaPlane } from 'react-icons/fa';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Package = () => {
  const [searchData, setSearchData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userSearch'));
    if (data) {
      setSearchData(data);
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!searchData) {
    return null;
  }

  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex flex-col h-60 justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/seen.jpg')" }}
      >
        <Navbar />

        <div className="text-center text-white mt-10">
          <h1 className="text-4xl font-bold mb-4">Discover Incredible India!</h1>
          <p className="text-2xl font-semibold">Plan Your Sojourn to God's Own Country</p>
        </div>
      </div>
      <div className="flex flex-row p-6 font-[dmsans] min-h-screen gap-6">
  
  {/* Left Filter Section */}
  <div className="w-[300px] border border-gray-300 p-4 rounded-lg shadow-lg h-fit">
    <h2 className="text-xl font-bold mb-4">Filter Your Results</h2>

    {/* Destinations */}
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Destinations</h3>
      <div className="flex flex-col gap-2">
        <label><input type="checkbox" className="mr-2" /> Asia</label>
        <label><input type="checkbox" className="mr-2" /> Europe</label>
        <label><input type="checkbox" className="mr-2" /> America</label>
        <button className="text-blue-600 mt-2 text-sm">See all</button>
      </div>
    </div>

    {/* Price */}
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Price (Per Person inc. Fee)</h3>
      <hr className="my-2" />
      <div className="flex justify-between text-sm">
        <span>£552.32</span>
        <span>£552.32</span>
      </div>
    </div>

    {/* Duration */}
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Duration (In Nights)</h3>
      <hr className="my-2" />
      <div className="flex justify-between text-sm">
        <span>2N</span>
        <span>20N</span>
      </div>
    </div>

    {/* Theme */}
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Theme</h3>
      <div className="flex flex-col gap-2">
        <label><input type="checkbox" className="mr-2" /> Honeymoon</label>
        <label><input type="checkbox" className="mr-2" /> Cultural</label>
        <label><input type="checkbox" className="mr-2" /> Pilgrimage</label>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-between mt-6">
      <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Clear All</button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Filter Result</button>
    </div>
  </div>

  

  {/* Right Content Section */}
  <div className="flex-1 flex flex-col">
    
    {/* Filter Buttons */}
    <div className="flex flex-wrap items-center justify-start gap-4 mb-6">
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">All</button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Homestays</button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Honeymoon</button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Pilgrimage</button>

      <select className="p-2 border rounded">
        <option>Sort By</option>
        <option>Price Low to High</option>
        <option>Price High to Low</option>
      </select>

      <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
            <h2 className="text-xl font-bold mb-4">Your Search Details</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <div><strong>From:</strong> {searchData.from || 'N/A'}</div>
              <div><strong>To:</strong> {searchData.to || 'N/A'}</div>
              <div><strong>Departure Date:</strong> {searchData.departureDate || 'N/A'}</div>
              <div><strong>Adults:</strong> {searchData.adults || 0}</div>
              <div><strong>Children:</strong> {searchData.children || 0}</div>
              <button
    onClick={() => navigate('/review')}
    className="mt-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
  >
    Proceed to Payment
  </button>
            </div>
          </div>
    </div>

    {/* Packages Section */}
    <div className="flex flex-wrap gap-6">
      {/* Display packages here */}
      {/* Example Card */}
     
     <div className="flex flex-row m-4">
     
     <div className="w-72 h-96 relative rounded-lg overflow-hidden shadow-lg font-[dmsans] m-4">
       {/* Image as background */}
       <div
         className="w-full h-full bg-cover bg-center"
         style={{ backgroundImage: "url('/images/kerala.jpg')" }}
       >
         <div className="flex flex-row ">
     <span className="bg-[red] m-4 text-white">10% Off</span>
     <span className="bg-[blue] m-4 text-white">Beach</span>
         </div>
     
     
       </div>
     
       {/* Overlay Content */}
       <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-white flex flex-col gap-2">
         <h1 className="text-lg font-bold capitalize">The Best Dream Tour of Kerala</h1>
         <span className="text-sm">Kerala, India</span>
         <span className="text-sm">4N 5D</span>
     
         {/* Features List */}
        <div className="flex flex-wrap gap-2 mt-2 list-none text-xs font-medium">
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaHotel className="text-blue-500" />
         Hotel
       </li>
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaMapMarkedAlt className="text-green-500" />
         Sightseeing
       </li>
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaUtensils className="text-red-500" />
         Meal
       </li>
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaPlane className="text-yellow-500" />
         Flight
       </li>
     
     </div>
     
       </div>
     </div>
     <div className="w-72 h-96 relative rounded-lg overflow-hidden shadow-lg font-[dmsans] m-4">
       {/* Image as background */}
       <div
         className="w-full h-full bg-cover bg-center"
         style={{ backgroundImage: "url('/images/kerala.jpg')" }}
       >
         <div className="flex flex-row ">
     <span className="bg-[red] m-4 text-white">10% Off</span>
     <span className="bg-[blue] m-4 text-white">Beach</span>
         </div>
     
     
       </div>
     
       {/* Overlay Content */}
       <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-white flex flex-col gap-2">
         <h1 className="text-lg font-bold capitalize">The Best Dream Tour of Kerala</h1>
         <span className="text-sm">Kerala, India</span>
         <span className="text-sm">4N 5D</span>
     
         {/* Features List */}
        <div className="flex flex-wrap gap-2 mt-2 list-none text-xs font-medium">
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaHotel className="text-blue-500" />
         Hotel
       </li>
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaMapMarkedAlt className="text-green-500" />
         Sightseeing
       </li>
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaUtensils className="text-red-500" />
         Meal
       </li>
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaPlane className="text-yellow-500" />
         Flight
       </li>
     
     </div>
     
       </div>
     </div>
     
     <div className="w-72 h-96 relative rounded-lg overflow-hidden shadow-lg font-[dmsans] m-4">
       {/* Image as background */}
       <div
         className="w-full h-full bg-cover bg-center"
         style={{ backgroundImage: "url('/images/kerala.jpg')" }}
       >
         <div className="flex flex-row ">
     <span className="bg-[red] m-4 text-white">10% Off</span>
     <span className="bg-[blue] m-4 text-white">Beach</span>
         </div>
     
     
       </div>
     
       {/* Overlay Content */}
       <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-white flex flex-col gap-2">
         <h1 className="text-lg font-bold capitalize">The Best Dream Tour of Kerala</h1>
         <span className="text-sm">Kerala, India</span>
         <span className="text-sm">4N 5D</span>
     
         {/* Features List */}
        <div className="flex flex-wrap gap-2 mt-2 list-none text-xs font-medium">
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaHotel className="text-blue-500" />
         Hotel
       </li>
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaMapMarkedAlt className="text-green-500" />
         Sightseeing
       </li>
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaUtensils className="text-red-500" />
         Meal
       </li>
     
       <li className="flex items-center gap-1 px-2 py-1 bg-white text-black rounded">
         <FaPlane className="text-yellow-500" />
         Flight
       </li>
     
     </div>
     
       </div>
     </div>
     </div>
    </div>

  </div>
</div>

      <Footer />
    </div>
  );
};

export default Package;
