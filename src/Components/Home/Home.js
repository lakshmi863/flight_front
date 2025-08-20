import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Chat from "../Chat/Chat";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import './Home.css';

const Home = () => {
 const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    tripType: "roundtrip",
    fromLocation: "",
    toLocation: "",
    departureDate: "",
    returnDate: "",
    isReturn: true,
    passengers: "",
    seatClass: "",
    directFlights: false,
    airlines: "All Airlines"
  });

  // Handle form input changes
 

  // Handle form submit
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ Updated: Handle form submit with backend API
  const handleSubmit = async (e) => {
  e.preventDefault();

    if (
    formData.fromLocation.trim() === "" ||
    formData.toLocation.trim() === "" ||
    formData.departureDate.trim() === "" ||
    (formData.isReturn && formData.returnDate.trim() === "") || // if return is checked
    formData.passengers.trim() === "" ||
    formData.seatClass.trim() === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    const token = localStorage.getItem('token'); // Get token from localStorage

    if (!token) {
      alert('Please login first.');
      return;
    }

    // Convert directFlights to 0 or 1
    const submissionData = { ...formData, directFlights: formData.directFlights ? 1 : 0 };

    // Send API request to backend
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/form/submit`, submissionData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 201) {
      alert('Form submitted successfully!');
      localStorage.setItem("flightSearch", JSON.stringify(formData));
      navigate("/search");
    } else {
      alert('Form submission failed.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message);
    } else {
      alert('Form submission failed. Please try again.');
    }
  }
};


  return (
    <div>
      {/* Header Section */}
      <div
        className="flex flex-col min-h-screen gap-4 p-4"
        style={{
          backgroundImage: "url('/images/Home.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />

        {/* Hero Text */}
        <div className="p-8 m-4 rounded-[15px] shadow-lg w-full max-w-[700px]">
          <h1 className="font-dmsans text-white text-[50px] mb-4">
            Unlock Effortless Travel with Unbeatable Flight Deals!
          </h1>
          <p className="font-dmsans text-white text-[18px] mb-6">
            From Seamless Booking to Smooth Takeoff - We Take Care of Every Detail So You Can Enjoy the Journey!
          </p>
          <button className="btn">DISCOVER NOW</button>
        </div>

        {/* Flight Booking Form */}
        <div className="flight-booking-container p-6 bg-white bg-opacity-90 rounded-[25px]">
          <form onSubmit={handleSubmit}>
            <div className="header">
              <div className="custom-select-wrapper">
                <select
                  id="tripType"
                  name="tripType"
                  className="custom-select"
                  value={formData.tripType}
                  onChange={handleChange}
                >
                  <option value="roundtrip">Round trip</option>
                  <option value="oneway">One way</option>
                  <option value="twoway">Two way</option>
                  <option value="holiday">Holiday packages</option>
                </select>
              </div>
            </div>

            {/* From & To */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fromLocation">From</label>
                <div className="input-field">
                  <select
                    id="fromLocation"
                    name="fromLocation"
                    value={formData.fromLocation}
                    onChange={handleChange}
                  >
                    <option value="">Country/State</option>
                    <optgroup label="India (States)">
                      <option value="AP">Andhra Pradesh</option>
                      <option value="DL">Delhi</option>
                      <option value="MH">Maharashtra</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="toLocation">To</label>
                <div className="input-field">
                  <select
                    id="toLocation"
                    name="toLocation"
                    value={formData.toLocation}
                    onChange={handleChange}
                  >
                    <option value="">Destination Country/State</option>
                    <optgroup label="United Kingdom">
                      <option value="ENG">London (LHR)</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="departureDate">Departure Date</label>
                <div className="input-field">
                  <input
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group return-date-group">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="returnDateCheckbox"
                    name="isReturn"
                    checked={formData.isReturn}
                    onChange={handleChange}
                  />
                  <label htmlFor="returnDateCheckbox">Return Date</label>
                </div>
                <div className="input-field">
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    disabled={!formData.isReturn}
                  />
                </div>
              </div>
            </div>

            {/* Passenger & Class */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="passengers">Passenger</label>
                <div className="input-field">
                  <input
                    type="text"
                    id="passengers"
                    name="passengers"
                    placeholder="Number of Passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="seatClass">Seat Class</label>
                <div className="input-field">
                  <input
                    type="text"
                    id="seatClass"
                    name="seatClass"
                    placeholder="Select Class"
                    value={formData.seatClass}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Airlines & Direct Flights */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="airlines">Select Airlines</label>
                <div className="input-field">
                  <input
                    type="text"
                    id="airlines"
                    name="airlines"
                    value={formData.airlines}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-group direct-flights-group">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="directFlightsCheckbox"
                    name="directFlights"
                    checked={formData.directFlights}
                    onChange={handleChange}
                  />
                  <label htmlFor="directFlightsCheckbox">Direct Flights Only</label>
                </div>
              </div>
            </div>

            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        
        {/* Airline Logos */}
        <div className="flex flex-wrap mt-[90px] space-x-12">
          <img src="/images/airways.png" alt="air" className="w-[100px] h-auto object-contain" />
          <img src="/images/aircanada.png" alt="air" className="w-[100px] h-auto object-contain" />
          <img src="/images/etihad.png" alt="air" className="w-[100px] h-auto object-contain" />
          <img src="/images/air canada.png" alt="air" className="w-[100px] h-auto object-contain" />
        </div>
      </div>

      {/* Offers Section */}
      <div className="flex flex-col justify-between items-center text-center p-6">
        <h1 className="text-3xl font-bold mb-4">Best Offers</h1>
        <p className="text-lg max-w-[800px]">
          We're excited to offer you an exclusive voucher to help you save on your next adventure.
          Whether you're planning a weekend getaway, a family vacation, or a solo expedition.
        </p>
      </div>

      {/* Voucher Cards */}
      <div className="flex flex-wrap justify-center space-x-4">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className="relative w-[400px] h-[200px] p-[5px] m-[15px] border-[5px] border-white rounded-[20px] overflow-hidden"
            style={{
              backgroundImage: `url('/images/votcher${item % 2 === 0 ? '2' : ''}.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 p-5 text-white">
              <p className="font-bold">SAVE UP TO</p>
              <h5 className="font-bold text-[50px]">20%</h5>
              <p>On your next flight with this exclusive voucher!</p>
            </div>
          </div>
        ))}
      </div>

      {/* Discover Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start flex-wrap p-4 gap-8 w-full max-w-[1200px] mx-auto">
        {/* Text Side */}
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-4xl font-bold mb-4 font-[dmsans]">DISCOVER</h1>
          <p className="text-lg mb-4 font-[dmsans]">More than 100 destinations waiting for you</p>
          <p className="text-base text-gray-700 font-[dmsans]">
            Explore our curated list of the best countries to visit in 2024 and discover incredible destinations waiting to be explored.
          </p>

          {/* Transparent Buttons */}
          <div className="flex flex-wrap gap-4 my-6">
            {["All", "Asian", "European", "Middle-East", "Beach Paradise", "Nature Retreats", "Romantic Escapes", "Cultural Immersion", "African", "American"].map((label, index) => (
              <button
                key={index}
                className="px-6 py-2 border border-black text-black rounded-full bg-transparent hover:bg-black hover:text-white transition duration-300"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div className="flex flex-col">
          {/* Top Images */}
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col">
              {/* Image 1 */}
              <div
                className="relative w-[280px] h-[250px] p-[5px] m-[5px] overflow-hidden rounded-[10px]"
                style={{
                  backgroundImage: "url('/images/dest1.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
                  <div>
                    <h1 className="font-bold">ROME</h1>
                    <p className="bg-white text-black w-[45px] text-center rounded px-1">Italy</p>
                  </div>
                  <div className="text-right">
                    <h1>fr $500*</h1>
                    <p>1000+ Destinations</p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div
                className="relative w-[280px] h-[250px] p-[5px] m-[5px] overflow-hidden rounded-[10px]"
                style={{
                  backgroundImage: "url('/images/dest2.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
                  <div>
                    <h1 className="font-bold">ROME</h1>
                    <p className="bg-white text-black w-[45px] text-center rounded px-1">Italy</p>
                  </div>
                  <div className="text-right">
                    <h1>fr $500*</h1>
                    <p>1000+ Destinations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div
              className="relative w-[500px] h-[520px] p-[5px] m-[15px] overflow-hidden rounded-[10px]"
              style={{
                backgroundImage: "url('/images/dest4.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
                <div>
                  <h1 className="font-bold">ROME</h1>
                  <p className="bg-white text-black w-[45px] text-center rounded px-1">Italy</p>
                </div>
                <div className="text-right">
                  <h1>fr $500*</h1>
                  <p>1000+ Destinations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Images */}
          <div className="flex justify-center flex-wrap">
            {/* Image 4 */}
            <div
              className="relative w-[290px] h-[250px] overflow-hidden rounded-[10px]"
              style={{
                backgroundImage: "url('/images/dest3.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
                <div>
                  <h1 className="font-bold">ROME</h1>
                  <p className="bg-white text-black w-[45px] text-center rounded px-1">Italy</p>
                </div>
                <div className="text-right">
                  <h1>fr $500*</h1>
                  <p>1000+ Destinations</p>
                </div>
              </div>
            </div>

            {/* Image 5 */}
            <div
              className="relative w-[280px] h-[250px] p-[5px] m-[5px] overflow-hidden rounded-[10px]"
              style={{
                backgroundImage: "url('/images/dest5.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
                <div>
                  <h1 className="font-bold">ROME</h1>
                  <p className="bg-white text-black w-[45px] text-center rounded px-1">Italy</p>
                </div>
                <div className="text-right">
                  <h1>fr $500*</h1>
                  <p>1000+ Destinations</p>
                </div>
              </div>
            </div>

            {/* Image 6 */}
            <div
              className="relative w-[280px] h-[250px] p-[5px] m-[5px] overflow-hidden rounded-[10px]"
              style={{
                backgroundImage: "url('/images/dest6.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
                <div>
                  <h1 className="font-bold">ROME</h1>
                  <p className="bg-white text-black w-[45px] text-center rounded px-1">Italy</p>
                </div>
                <div className="text-right">
                  <h1>fr $500*</h1>
                  <p>1000+ Destinations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="p-6 m-6">
  <h1 className="text-center text-3xl font-bold mb-6">EXPLORE NEARBY</h1>

  <div className="flex flex-row gap-8 overflow-x-auto">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/loss.png" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">Los Angeles</h1>
      <p className="text-gray-600">2 Hours Away</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/mimi.jpg" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">MIAMI</h1>
      <p className="text-gray-600">2 Hours Away</p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/loss v.jpg" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">LOS VEGAS</h1>
      <p className="text-gray-600">2 Hours Away</p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/tex.jpg" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">TEXAS</h1>
      <p className="text-gray-600">2 Hours Away</p>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/chi.jpg"alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">CHICAGO</h1>
      <p className="text-gray-600">2 Hours Away</p>
    </div>
      <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/new york.png" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">NEW YORK</h1>
      <p className="text-gray-600">2 Hours Away</p>
      
    </div>
     <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/the-capitol-building.jpg" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">ALASKA</h1>
      <p className="text-gray-600">2 Hours Away</p>
      
    </div>
  </div>
</div>
<div>

</div>
<div className="p-6">
  <h1 className="text-center text-3xl font-bold mb-6">EXPLORE SINGAPORE</h1>

  <div className="flex flex-row gap-6 overflow-x-auto">
    {/* Card 1 */}
    <div className="flex flex-wrap gap-4 justify-center">
  {/* Card 1 */}
  <div
    className="relative w-[250px] h-[300px] rounded-[15px] overflow-hidden flex items-end p-4 text-white"
    style={{
      backgroundImage: "url('/images/Tour-Voucher-Template.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-10">
      <h1 className="font-bold text-xl">SINGAPORE</h1>
      <p>3 Hours Away</p>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="relative w-[450px] h-[300px] rounded-[15px] overflow-hidden flex items-end p-4 text-white"
    style={{
      backgroundImage: "url('/images/Travel-Choic.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-10">
      <h1 className="font-bold text-xl">SINGAPORE</h1>
      <p>3 Hours Away</p>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="relative w-[490px] h-[300px] rounded-[15px] overflow-hidden flex items-end p-4 text-white"
    style={{
      backgroundImage: "url('/images/Travel-gift-voucher-template.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-10">
      <h1 className="font-bold text-xl">SINGAPORE</h1>
      <p>3 Hours Away</p>
    </div>
  </div>

  {/* Card 4 */}
  <div
    className="relative w-[550px] h-[300px] rounded-[15px] overflow-hidden flex items-end p-4 text-white"
    style={{
      backgroundImage: "url('/images/votcher.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-10">
      <h1 className="font-bold text-xl">SINGAPORE</h1>
      <p>3 Hours Away</p>
    </div>
  </div>
</div>

  </div>
</div>

<div className="text-center p-6 max-w-[800px] mx-auto">
  <h1 className="text-4xl font-bold mb-4">Get Started</h1>
  <h3 className="text-lg text-gray-700">
    Get in touch with us, we're here to assist you.
  </h3>
</div>

<div>

</div>
<form className="flex flex-col space-y-4 w-full max-w-[900px] mx-auto p-4">
  {/* First Row: Name, Email, Phone */}
  <div className="flex flex-wrap gap-4">
    <div className="flex flex-col flex-1">
      <label className="mb-1">Your Name</label>
      <input type="text" className="border border-gray-400 rounded px-3 py-2 w-full" />
    </div>
    <div className="flex flex-col flex-1">
      <label className="mb-1">Email Address</label>
      <input type="email" className="border border-gray-400 rounded px-3 py-2 w-full" />
    </div>
    <div className="flex flex-col flex-1">
      <label className="mb-1">Phone Number (optional)</label>
      <input type="number" className="border border-gray-400 rounded px-3 py-2 w-full" />
    </div>
  </div>

  {/* Second Row: Message */}
  <div className="flex flex-col">
    <label className="mb-1">Message</label>
    <textarea rows="5" className="border border-gray-400 rounded px-3 py-2 w-full" placeholder="Write your message here..." />
  </div>

  {/* Submit Button */}
  <div className="flex justify-center mt-4">
    <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
      Leave Us a Message
    </button>
  </div>
</form>
  
  <Chat/>
<Footer/>
 </div>
  );
};

export default Home;
