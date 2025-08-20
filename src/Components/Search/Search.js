import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaFilter, FaCheckCircle, FaTag, FaBolt, FaMoneyBillAlt, FaStar } from "react-icons/fa";
import { FaPlaneDeparture, FaPlaneArrival, FaClock } from "react-icons/fa";
import { FaSuitcaseRolling, FaSuitcase, FaInfoCircle } from "react-icons/fa";

// Haversine Formula to Calculate Distance
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
    Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function calculateFlightTime(fromCode, toCode) {
  const locationCoordinates = {
    AP: { lat: 15.9129, lon: 79.7400 },
    DL: { lat: 28.7041, lon: 77.1025 },
    MH: { lat: 19.7515, lon: 75.7139 },
    ENG: { lat: 51.4700, lon: -0.4543 },
  };

  const fromLocation = locationCoordinates[fromCode];
  const toLocation = locationCoordinates[toCode];

  if (!fromLocation || !toLocation) return null;

  const distance = calculateDistance(
    fromLocation.lat,
    fromLocation.lon,
    toLocation.lat,
    toLocation.lon
  );

  const averageFlightSpeed = 900;
  const estimatedTime = distance / averageFlightSpeed;

  return estimatedTime.toFixed(2);
}

const Search = () => {
  const [buttonLabel, setButtonLabel] = useState("Search");
  const [formData, setFormData] = useState(null);
  const [flightTime, setFlightTime] = useState(null);
  const [showAdditionalFlights, setShowAdditionalFlights] = useState(false);
  const [showBaggageInfo, setShowBaggageInfo] = useState(false)
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  const navigate = useNavigate();

  const availableFlights = {
    departure: [
      { date: "2024-07-10", price: "£450" },
      { date: "2024-07-11", price: "£460" },
      { date: "2024-07-12", price: "£470" },
    ],
    return: [
      { date: "2024-07-15", price: "£430" },
      { date: "2024-07-16", price: "£440" },
      { date: "2024-07-17", price: "£450" },
    ],
  };

  useEffect(() => {
    const searchData = localStorage.getItem("flightSearch");
    if (searchData) {
      const parsedData = JSON.parse(searchData);
      setFormData(parsedData);
      setButtonLabel("Modify Search");

      const time = calculateFlightTime(parsedData.fromLocation, parsedData.toLocation);
      setFlightTime(time);
    }
  }, []);

  return (
    <div className="flex flex-col h-90 bg-gray-50">
      {/* Background Section */}
      <div
        className="p-10 bg-gray-50 flex-1"
        style={{
          backgroundImage: "url(/images/Home.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        {/* Form Data Display */}
        <div className="pt-9 max-w-[1200px] mx-auto border border-gray-400 rounded-lg p-6">
          {formData && (
            <div className="flex flex-wrap gap-6 bg-opacity-70 p-6 rounded-lg shadow-lg border-2 border-gray-400">
              <div className="flex flex-col text-white min-w-[150px]">
                <label className="font-semibold">Trip Type</label>
                <span>{formData.tripType}</span>
              </div>
              <div className="flex flex-col text-white min-w-[90px]">
                <label className="font-semibold">From</label>
                <span>{formData.fromLocation}</span>
              </div>
              <div className="flex flex-col text-white min-w-[90px]">
                <label className="font-semibold">To</label>
                <span>{formData.toLocation}</span>
              </div>
              <div className="flex flex-col text-white min-w-[150px]">
                <label className="font-semibold">Departure Date</label>
                <span>{formData.departureDate}</span>
              </div>
              {formData.isReturn && (
                <div className="flex flex-col text-white min-w-[150px]">
                  <label className="font-semibold">Return Date</label>
                  <span>{formData.returnDate}</span>
                </div>
              )}
              <div className="flex flex-col text-white min-w-[150px]">
                <label className="font-semibold">Passengers</label>
                <span>{formData.passengers}</span>
              </div>
              <div className="flex flex-col text-white min-w-[150px]">
                <label className="font-semibold">Seat Class</label>
                <span>{formData.seatClass}</span>
              </div>
              <div className="flex flex-col text-white min-w-[150px]">
                <label className="font-semibold">Direct Flights Only</label>
                <span>{formData.directFlights ? "Yes" : "No"}</span>
              </div>
              <div className="flex flex-col text-white min-w-[150px]">
                <label className="font-semibold">Airlines</label>
                <span>{formData.airlines}</span>
              </div>
            </div>
          )}

          {/* Search Button */}
          <div className="flex justify-center my-6">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col gap-6 p-6 border-t border-gray-400 rounded-t-lg bg-white bg-opacity-90">
       <button
  onClick={() => setShowFilterPopup(true)}
  className="flex items-center gap-2 text-2xl font-bold mb-4"
>
  <FaFilter className="text-blue-600" /> Filters
</button>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="nonStop" />
            <label htmlFor="nonStop" className="text-lg font-medium flex items-center gap-1">
              <FaCheckCircle className="text-green-600" /> Non-Stop Flight
            </label>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center gap-2 bg-gray-100 p-3 rounded-lg min-w-[120px]">
              <div className="flex items-center gap-2">
                <FaTag className="text-gray-600" />
                <li className="list-none font-medium">Recommended</li>
              </div>
              <span className="text-blue-600 font-semibold">£552.32*</span>
            </div>

            <div className="flex flex-col items-center gap-2 bg-gray-100 p-3 rounded-lg min-w-[120px]">
              <div className="flex items-center gap-2">
                <FaBolt className="text-yellow-500" />
                <li className="list-none font-medium">Fastest</li>
              </div>
              <span className="text-blue-600 font-semibold">£552.32*</span>
            </div>

            <div className="flex flex-col items-center gap-2 bg-gray-100 p-3 rounded-lg min-w-[120px]">
              <div className="flex items-center gap-2">
                <FaMoneyBillAlt className="text-green-500" />
                <li className="list-none font-medium">Cheapest</li>
              </div>
              <span className="text-blue-600 font-semibold">£552.32*</span>
            </div>

            <div className="flex flex-col items-center gap-2 bg-gray-100 p-3 rounded-lg min-w-[120px]">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <li className="list-none font-medium">Best Deals</li>
              </div>
              <span className="text-blue-600 font-semibold">£552.32*</span>
            </div>
          </div>
        </div>
      </div>

      {/* Departure and Return Flights */}
      <div className="pt-9 max-w-[1200px] mx-auto border-4 border-blue-600 rounded-lg p-6 bg-white bg-opacity-90 shadow-lg">
        {formData && (
          <div className="flex flex-col items-center gap-6 my-6">
            {/* Departure Flight */}
            <div className="flex flex-wrap items-center justify-between gap-6 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg border border-gray-400 min-w-[400px] w-full max-w-[800px]">
              <div className="flex flex-col items-center text-gray-700">
                <h1 className="text-xl font-bold mb-2">Departure Date</h1>
                <p className="text-lg font-medium text-blue-600 mb-4">{formData.departureDate}</p>
                <span className="block font-semibold">From</span>
                <span className="text-blue-600">{formData.fromLocation}</span>
              </div>

              <div className="text-xl font-semibold text-green-600 text-center">
                {flightTime ? `Estimated Time:\n${flightTime} Hours` : 'Time Unavailable'}
              </div>

              <div className="flex flex-col items-center text-gray-700">
                <span className="block font-semibold mb-2">To</span>
                <span className="text-blue-600">{formData.toLocation}</span>
              </div>

              <div className="flex flex-col items-end ml-auto text-right gap-2">
                <h1 className="text-xl font-bold text-green-700">£552.32*</h1>
                <span className="text-sm text-gray-600">Price per person</span>
                <span className="text-sm text-gray-600">(Incl. taxes and fees)</span>
                <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Book Now
                </button>
              </div>
            </div>

            {/* Return Flight */}
            {formData.isReturn && (
              <div className="flex flex-wrap items-center justify-between gap-6 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg border border-gray-400 min-w-[400px] w-full max-w-[800px]">
                <div className="flex flex-col items-center text-gray-700">
                  <h1 className="text-xl font-bold mb-2">Return Date</h1>
                  <p className="text-lg font-medium text-blue-600 mb-4">{formData.returnDate}</p>
                  <span className="block font-semibold">To</span>
                  <span className="text-blue-600">{formData.toLocation}</span>
                </div>

                <div className="text-xl font-semibold text-green-600 text-center">
                  {flightTime ? `Estimated Time:\n${flightTime} Hours` : 'Time Unavailable'}
                </div>

                <div className="flex flex-col items-center text-gray-700">
                  <span className="block font-semibold mb-2">From</span>
                  <span className="text-blue-600">{formData.fromLocation}</span>
                </div>

                <div className="flex flex-col items-end ml-auto text-right gap-2">
                  <h1 className="text-xl font-bold text-green-700">£552.32*</h1>
                  <span className="text-sm text-gray-600">Price per person</span>
                  <span className="text-sm text-gray-600">(Incl. taxes and fees)</span>
                  <button
  onClick={() => navigate("/review", { state: { formData } })}
  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
>
  Book Now
</button>
                </div>
              </div>
            )}

            {/* Flight Info Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <button
                onClick={() => setShowAdditionalFlights(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                FLIGHT DETAILS
              </button>
            <button
  onClick={() => setShowBaggageInfo(true)}
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
>
  BAGGAGE
</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                REFUNDABLE
              </button>
            </div>
          </div>
        )}
      </div>

      {showAdditionalFlights && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg w-[90%] max-w-[600px]">
      <h2 className="text-xl font-bold mb-4 text-center">Available Flights on Other Dates</h2>

      {/* Departure Flights */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-600">
          <FaPlaneDeparture /> Departure Flights
        </h3>
        {availableFlights.departure.map((flight, index) => (
          <div key={index} className="flex justify-between items-center border p-3 rounded mb-2">
            <div className="flex items-center gap-2">
              <FaClock className="text-gray-600" />
              <span>{flight.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillAlt className="text-green-600" />
              <span className="font-semibold">{flight.price}</span>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded">
              Select
            </button>
          </div>
        ))}
      </div>

      {/* Return Flights */}
      {formData.isReturn && (
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-600">
            <FaPlaneArrival /> Return Flights
          </h3>
          {availableFlights.return.map((flight, index) => (
            <div key={index} className="flex justify-between items-center border p-3 rounded mb-2">
              <div className="flex items-center gap-2">
                <FaClock className="text-gray-600" />
                <span>{flight.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMoneyBillAlt className="text-green-600" />
                <span className="font-semibold">{flight.price}</span>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded">
                Select
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Close Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowAdditionalFlights(false)}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>

  
)}
{showBaggageInfo && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg w-[90%] max-w-[500px]">
      <h2 className="text-xl font-bold mb-4 text-center">Baggage Allowed <br /> <span className="text-sm font-normal">(per person)</span></h2>

      {/* Cabin Baggage */}
      <div className="flex items-center gap-4 mb-4 border p-3 rounded-lg">
        <FaSuitcaseRolling className="text-blue-600 text-2xl" />
        <div>
          <h3 className="font-semibold">Cabin Baggage</h3>
          <p>(56 x 36 x 23) - 7kg</p>
        </div>
      </div>

      {/* Checked Baggage */}
      <div className="flex items-center gap-4 mb-4 border p-3 rounded-lg">
        <FaSuitcase className="text-green-600 text-2xl" />
        <div>
          <h3 className="font-semibold">Checked Baggage</h3>
          <p>1 x 23kg</p>
        </div>
      </div>

      {/* Info Message */}
      <div className="flex items-start gap-3 text-gray-700 text-sm mt-4">
        <FaInfoCircle className="text-yellow-500 text-xl" />
        <p>Different baggage allowance may apply. <br /> We show minimum baggage allowance here.</p>
      </div>

      {/* Close Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowBaggageInfo(false)}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    {showFilterPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto p-4">
    <div className="bg-white p-6 rounded-lg w-[90%] max-w-[700px] overflow-y-auto max-h-[90vh]">

      <h1 className="text-2xl font-bold text-center mb-6">Filter Your Results</h1>

      {/* Stops */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Stops</h2>
        {["Non-Stop Flight", "1 Stop Flight", "1+ Stop Flight"].map((label, idx) => (
          <div key={idx} className="flex items-center gap-2 mb-2">
            <input type="checkbox" />
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Price (Total Price Per Person inc Fee)</h2>
        <div className="flex items-center justify-between">
          <input type="range" min="100" max="1000" className="w-full" />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>£552.32</span>
          <span>£552.32</span>
        </div>
      </div>

      {/* Flight Duration */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Flight Duration</h2>
        <div className="flex items-center justify-between">
          <input type="range" min="1" max="20" className="w-full" />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>2h</span>
          <span>12h</span>
        </div>
      </div>

      {/* Departure Time */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Departure Time</h2>
        <div className="flex items-center justify-between">
          <input type="range" min="0" max="24" className="w-full" />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>00:00</span>
          <span>23:59</span>
        </div>
      </div>

      {/* Arrival Time */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Arrival Time</h2>
        <div className="flex items-center justify-between">
          <input type="range" min="0" max="24" className="w-full" />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>00:00</span>
          <span>23:59</span>
        </div>
      </div>

      {/* Departing From */}
      <div className="mb-4">
  <h2 className="font-semibold mb-2">Departing From</h2>
  {["Indira Gandhi International Airport (DEL)", "Chhatrapati Shivaji Maharaj International Airport (BOM)", "Rajiv Gandhi International Airport (HYD)"].map((airport, idx) => (
    <div key={idx} className="flex items-center gap-2 mb-2">
      <input type="checkbox" />
      <span>{airport}</span>
    </div>
  ))}
</div>

{/* Arriving At */}
<div className="mb-4">
  <h2 className="font-semibold mb-2">Arriving At</h2>
  {["London (Heathrow - LHR)", "New York (JFK)", "Dubai (DXB)"].map((city, idx) => (
    <div key={idx} className="flex items-center gap-2 mb-2">
      <input type="checkbox" />
      <span>{city}</span>
    </div>
  ))}
</div>

{/* Airlines */}
<div className="mb-4">
  <h2 className="font-semibold mb-2">Airlines</h2>
  {[
    { name: "Emirates", logo: "https://content.r9cdn.net/rimg/provider-logos/airlines/v/EK.png" },
    { name: "British Airways", logo: "https://content.r9cdn.net/rimg/provider-logos/airlines/v/BA.png" },
    { name: "Air India", logo: "https://content.r9cdn.net/rimg/provider-logos/airlines/v/AI.png" },
    { name: "Lufthansa", logo: "https://content.r9cdn.net/rimg/provider-logos/airlines/v/LH.png" },
  ].map((airline, idx) => (
    <div key={idx} className="flex items-center gap-2 mb-2">
      <input type="checkbox" />
      <img src={airline.logo} alt={airline.name} className="w-6 h-6 object-contain" />
      <span>{airline.name}</span>
    </div>
  ))}

  <button className="text-blue-600 underline mt-2">See All</button>
</div>


{/* Layover Airports */}
<div className="mb-4">
  <h2 className="font-semibold mb-2">Layover Airports</h2>
  {["Doha (DOH)", "Frankfurt (FRA)", "Abu Dhabi (AUH)"].map((city, idx) => (
    <div key={idx} className="flex items-center gap-2 mb-2">
      <input type="checkbox" />
      <span>{city}</span>
    </div>
  ))}
</div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => {
            // Clear functionality (optional)
            setShowFilterPopup(false);
          }}
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded"
        >
          Clear All
        </button>

        <button
          onClick={() => setShowFilterPopup(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Filter Results
        </button>
      </div>
    </div>
  </div>
)}


      <Footer />
    </div>
  );
};

export default Search;
