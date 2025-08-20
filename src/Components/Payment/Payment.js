import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { 
  Card, CardContent, Typography, TextField, Button, Box 
} from "@mui/material";

const Payment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (cardNumber && cardHolder && expiry && cvv) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        navigate("/payment-success");
      }, 2000);
    } else {
      alert("Please fill in all payment details.");
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="#425e5a">
      <Navbar />

      <Box maxWidth="600px" mx="auto" mt={6} p={2}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Payment Page
        </Typography>

        <Card>
          <CardContent>
            {/* Payment Summary */}
            <Typography variant="h6" gutterBottom>
              Payment Summary
            </Typography>
            <Box display="flex" justifyContent="space-between" mb={3}>
              <span>Total Amount:</span>
              <Typography fontWeight="bold" color="green">
                $90,500
              </Typography>
            </Box>

            {/* Card Details */}
            <Typography variant="h6" gutterBottom>
              Card Details
            </Typography>

            <TextField
              label="Card Number"
              fullWidth
              margin="normal"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <TextField
              label="Card Holder Name"
              fullWidth
              margin="normal"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
            <Box display="flex" gap={2}>
              <TextField
                label="MM/YY"
                fullWidth
                margin="normal"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <TextField
                label="CVV"
                fullWidth
                margin="normal"
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
              disabled={isProcessing}
              onClick={handlePayment}
            >
              {isProcessing ? "Processing..." : "Pay Now"}
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Footer />
    </Box>
  );
};

export default Payment;
