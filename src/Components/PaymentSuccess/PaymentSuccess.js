import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
     <div className="flex flex-col min-h-screen bg-[#f88379]">
      <Navbar />

      <div className="max-w-[600px] mx-auto p-6 flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>
        <p className="text-lg text-gray-700 text-center">Thank you for your booking. A confirmation email has been sent to you.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Back to Home
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
