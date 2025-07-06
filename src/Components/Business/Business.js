import Navbar from "../Navbar/Navbar"
import { FaHotel, FaMapMarkedAlt, FaUtensils, FaPlane } from 'react-icons/fa';
import Footer from "../Footer/Footer";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Business = ()=>{
    const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    roomsGuests: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userSearch', JSON.stringify(formData));
    navigate('/package'); // 👈 Change route as needed
  };

    return(
        <div>
        <div
        className="flex flex-col h-90 gap-4 p-4"
        style={{
          backgroundImage: "url('/images/city.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
            <Navbar/>

            
          <div className="text-white font-[dmsans] flex items-center justify-center p-4 text-xl">
  Explore the World with Our Exclusive Tour Packages!
</div> 
<div className="p-4 flex items-center justify-center">
  <form
  className="flex flex-row gap-4 items-end flex-wrap border border-gray-300 rounded-lg p-6 shadow-lg"
  onSubmit={handleSubmit}
>
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-white">From</label>
    <input
      type="text"
      name="from"
      value={formData.from}
      onChange={handleChange}
      className="p-2 border rounded"
      required
    />
  </div>

  <div className="flex flex-col">
    <label className="mb-1 font-medium text-white">To</label>
    <input
      type="text"
      name="to"
      value={formData.to}
      onChange={handleChange}
      className="p-2 border rounded"
      required
    />
  </div>

  <div className="flex flex-col">
    <label className="mb-1 font-medium text-white">Departure Date</label>
    <input
      type="date"
      name="departureDate"
      value={formData.departureDate}
      onChange={handleChange}
      className="p-2 border rounded"
      required
    />
  </div>

  <div className="flex flex-col">
    <label className="mb-1 font-medium text-white">Rooms & Guests</label>
    <input
      type="text"
      name="roomsGuests"
      value={formData.roomsGuests}
      onChange={handleChange}
      className="p-2 border rounded"
      placeholder="e.g. 2 Rooms, 4 Guests"
      pattern="^\d+\sRoom[s]?,\s\d+\sGuest[s]?$"
      title="Please enter in the format: '2 Rooms, 4 Guests'"
      required
    />
  </div>

  <button
    type="submit"
    className="p-2 bg-black text-white rounded hover:bg-blue-600"
  >
    Modify Search
  </button>
</form>

</div>
</div>

<div className="flex flex-row font-[dmsans] items-center justify-center p-4 text-xl">
  <h1 className="mb-2 text-2xl font-bold capitalize">Trending Destinations</h1>
  
  <div className="max-w-2xl text-center">
    <p className="text-base text-black-200">
      Explore the hottest travel spots of the year! Discover breathtaking landscapes,
      vibrant cultures, and unforgettable experiences!
    </p>
  </div>
</div>
<div className="flex flex-wrap gap-4 justify-center p-4 font-[dmsans]">
  
  {/* Paris Card */}
  <div
    className="flex flex-col justify-end w-72 h-80 gap-2 p-4 rounded-lg text-white bg-cover bg-center shadow-lg"
    style={{ backgroundImage: "url('/images/paries.jpg')" }}
  >
    <div className="bg-black bg-opacity-50 p-2 rounded">Disneyland, Paris</div>
    <p className="bg-black bg-opacity-50 p-2 rounded">Starting from ₹2,50,000 / per person</p>
  </div>

  {/* Maldives Card */}
  <div
    className="flex flex-col justify-end w-72 h-80 gap-2 p-4 rounded-lg text-white bg-cover bg-center shadow-lg"
    style={{ backgroundImage: "url('/images/mal.jpg')" }}
  >
    <div className="bg-black bg-opacity-50 p-2 rounded">Maldives</div>
    <p className="bg-black bg-opacity-50 p-2 rounded">Starting from ₹1,10,000 / per person</p>
  </div>

  {/* Singapore Card */}
  <div
    className="flex flex-col justify-end w-72 h-80 gap-2 p-4 rounded-lg text-white bg-cover bg-center shadow-lg"
    style={{ backgroundImage: "url('/images/sing.jpg')" }}
  >
    <div className="bg-black bg-opacity-50 p-2 rounded">Singapore</div>
    <p className="bg-black bg-opacity-50 p-2 rounded">Starting from ₹1,10,000 / per person</p>
  </div>

  {/* Dubai Card */}
  <div
    className="flex flex-col justify-end w-72 h-80 gap-2 p-4 rounded-lg text-white bg-cover bg-center shadow-lg"
    style={{ backgroundImage: "url('/images/dub.jpg')" }}
  >
    <div className="bg-black bg-opacity-50 p-2 rounded">Dubai</div>
    <p className="bg-black bg-opacity-50 p-2 rounded">Starting from ₹1,10,000 / per person</p>
  </div>

</div>

<div className="flex flex-col items-center justify-center p-6 font-[dmsans] text-center">
  <div className="max-w-2xl">
    <h1 className="text-3xl font-bold mb-4 capitalize">
      Exclusive Packages You Can't Resist!
    </h1>
    <p className="text-gray-600 text-lg">
      Explore breathtaking destinations with our handpicked deals! <br />
      Book now for an unforgettable journey at unbeatable prices!
    </p>
  </div>
</div>

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

      <div className="p-6 m-6">
  <h1 className="text-center text-3xl font-bold mb-6">Luxury Retreats</h1>
  <p className="text-center text-3xl font-bold mb-6">Indulge in world-class comfort and breathtaking destinations!  Experience the finest stays and personalized services like never before!</p>

  <div className="flex flex-row gap-8 overflow-x-auto">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/loss.png" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">Los Angeles</h1>
      
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/mimi.jpg" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">MIAMI</h1>
      
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/loss v.jpg" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">LOS VEGAS</h1>
      
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/tex.jpg" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">TEXAS</h1>
      
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/chi.jpg"alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">CHICAGO</h1>
      
    </div>
      <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/new york.png" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">NEW YORK</h1>
      
      
    </div>
     <div className="flex flex-col items-center text-center min-w-[150px]">
      <img src="/images/the-capitol-building.jpg" alt="voter-image" className="w-[150px] h-[150px] object-cover rounded-full mb-4" />
      <h1 className="font-semibold">ALASKA</h1>
      
      
    </div>
  </div>
</div>
<Footer/>
</div>
    )
}
export default Business