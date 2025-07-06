import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Review = () => {
  const navigate = useNavigate();

  return (
<div className="flex flex-col min-h-screen bg-[#064E3B]">
      <Navbar />

      {/* Page Content */}
      <div className="flex flex-col gap-8 p-6">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Please Review Your Offer</h1>

        {/* Flight Summary */}
        <div className="border border-gray-300 rounded-lg bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Flight Summary</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><span className="font-semibold">From:</span> Delhi (DEL)</div>
            <div><span className="font-semibold">To:</span> London (LHR)</div>
            <div><span className="font-semibold">Departure Date:</span> 2024-07-20 | Economy Class</div>
            <div><span className="font-semibold">Airline:</span> British Airways</div>
          </div>
        </div>

        {/* Fare Summary */}
        <div className="border border-gray-300 rounded-lg bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Fare Summary</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>Passenger 1 (Adult)</div>
            <div>$90,500</div>

            <div>Price per Adult</div>
            <div>$38,660</div>

            <div>Flexible Ticket</div>
            <div>$18,660</div>

            <div>Taxes & Fees</div>
            <div>+$10,660</div>

            <div className="col-span-2 border-t pt-4 font-bold flex justify-between">
              <span>Total Amount</span>
              <span>$90,500</span>
            </div>
          </div>
        </div>

        {/* Traveler Details */}
        <div className="border border-gray-300 rounded-lg bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Traveler Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Title *</label>
              <select className="border p-2 rounded">
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name *</label>
              <input type="text" placeholder="First Name" className="border p-2 rounded" />
              <input type="text" placeholder="Last Name" className="border p-2 rounded" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Date of Birth *</label>
              <input type="date" className="border p-2 rounded" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nationality *</label>
              <input type="text" className="border p-2 rounded" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-semibold">Passport Number *</label>
              <input type="text" className="border p-2 rounded" />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border border-gray-300 rounded-lg bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email *</label>
              <input type="email" className="border p-2 rounded" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Confirm Email *</label>
              <input type="email" className="border p-2 rounded" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-semibold">Mobile Number *</label>
              <input type="text" className="border p-2 rounded" />
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/payment')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto bg-white p-6 rounded-lg border border-gray-400 my-8 flex flex-col gap-6">

  {/* Important Information Section */}
  <div>
    <h1 className="text-2xl font-bold text-blue-700 mb-4">Important Information</h1>
    <p className="mb-4 text-gray-700 leading-relaxed">
      Passengers traveling to the United States, please note
    </p>
    <p className="text-gray-700 leading-relaxed">
      <strong>Who can travel?</strong> All fully vaccinated travelers are allowed to enter the country. All WHO-approved vaccines, including Covishield and Covaxin, are accepted by the USA.
      <br /><br />
      <strong>Destination restrictions:</strong> Non-vaccinated travelers from India cannot enter. Any traveler transiting via EU/UK cannot enter the USA.
      <br /><br />
      Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.
    </p>
  </div>

  {/* Note on Guidelines Section */}
  <div>
    <h1 className="text-2xl font-bold text-blue-700 mb-4">A Note on Guidelines</h1>
    <p className="text-gray-700 leading-relaxed">
      While we do our best to get you the latest information, due to the rapidly evolving nature of current events, sometimes that is not possible.
      <br /><br />
      Please note, it is the sole responsibility of the passenger to ensure his or her eligibility to enter the destination or transit countries (as applicable). We accept no liability in this regard. Please check the travel rules of all regulatory websites before booking as well as before commencing your journey.
    </p>
  </div>

</div>

      <Footer />
    </div>
  );
};

export default Review;
