import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (cardNumber && cardHolder && expiry && cvv) {
      setIsProcessing(true);

      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        navigate('/payment-success');
      }, 2000);
    } else {
      alert('Please fill in all payment details.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#425e5a]">

      <Navbar />

      <div className="max-w-[800px] mx-auto p-6 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Payment Page</h1>

        <div className="border border-gray-400 rounded-lg p-6 bg-white flex flex-col gap-6 shadow-lg">

          {/* Payment Summary */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold border-b pb-2">Payment Summary</h2>
            <div className="flex justify-between">
              <span>Total Amount:</span>
              <span className="font-bold text-green-700">$90,500</span>
            </div>
          </div>

          {/* Payment Form */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold border-b pb-2">Card Details</h2>

            <input
              type="text"
              placeholder="Card Number"
              className="border p-3 rounded w-full"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />

            <input
              type="text"
              placeholder="Card Holder Name"
              className="border p-3 rounded w-full"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="border p-3 rounded w-full"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                className="border p-3 rounded w-full"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ${isProcessing && 'opacity-50 cursor-not-allowed'}`}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
