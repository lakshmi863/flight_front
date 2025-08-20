import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  MenuItem,
  Box,
} from "@mui/material";

const Review = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="rgba(85, 81, 85, 0.33)">
      <Navbar />

      <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
        {/* Page Title */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Please Review Your Offer
        </Typography>

        {/* Flight Summary */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Flight Summary
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography><strong>From:</strong> Delhi (DEL)</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography><strong>To:</strong> London (LHR)</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography><strong>Departure Date:</strong> 2024-07-20 | Economy Class</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography><strong>Airline:</strong> British Airways</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Fare Summary */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Fare Summary
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>Passenger 1 (Adult)</Grid>
              <Grid item xs={6}>$90,500</Grid>

              <Grid item xs={6}>Price per Adult</Grid>
              <Grid item xs={6}>$38,660</Grid>

              <Grid item xs={6}>Flexible Ticket</Grid>
              <Grid item xs={6}>$18,660</Grid>

              <Grid item xs={6}>Taxes & Fees</Grid>
              <Grid item xs={6}>+$10,660</Grid>

              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between" borderTop={1} pt={2} fontWeight="bold">
                  <span>Total Amount</span>
                  <span>$90,500</span>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Traveler Details */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Traveler Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField select label="Title" fullWidth>
                  <MenuItem value="Mr.">Mr.</MenuItem>
                  <MenuItem value="Ms.">Ms.</MenuItem>
                  <MenuItem value="Mrs.">Mrs.</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Full Name" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField type="date" label="Date of Birth" InputLabelProps={{ shrink: true }} fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Nationality" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Passport Number" fullWidth />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField type="email" label="Email" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField type="email" label="Confirm Email" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Mobile Number" fullWidth />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Proceed Button */}
        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </Button>
        </Box>

        {/* Important Info */}
        <Card sx={{ mt: 6 }}>
          <CardContent>
            <Typography variant="h5" color="primary" gutterBottom>
              Important Information
            </Typography>
            <Typography paragraph>
              Passengers traveling to the United States, please note
            </Typography>
            <Typography paragraph>
              <strong>Who can travel?</strong> All fully vaccinated travelers are allowed to enter the country. All WHO-approved vaccines, including Covishield and Covaxin, are accepted by the USA.

            </Typography>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card sx={{ mt: 4, mb: 6 }}>
          <CardContent>
            <Typography variant="h5" color="primary" gutterBottom>
              A Note on Guidelines
            </Typography>
            <Typography paragraph>
         While we do our best to get you the latest information, due to the rapidly evolving nature of current events, 
      sometimes that is not possible.
      Please note, it is the sole responsibility of the passenger to ensure his or her eligibility to enter
       the destination or transit countries (as applicable). We accept no liability in this regard. Please check the travel 
       rules of all regulatory websites before booking as well as before commencing your journey.

            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Footer />
    </Box>
  );
};

export default Review;
