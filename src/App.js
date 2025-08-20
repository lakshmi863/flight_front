import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Review from "./Components/Review/Review";
import Payment from "./Components/Payment/Payment";
import PaymentSuccess from "./Components/PaymentSuccess/PaymentSuccess";
import Business from "./Components/Business/Business";
import Package from "./Components/Package/Package";
import Signup from "./Components/Signup/Signup";
import Login from './Components/Login/Login';
import Chat from './Components/Chat/Chat';
import ProtectedRoute from './Components/ProtectedRoute'; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/search" element={
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        } />
        <Route path="/review" element={
          <ProtectedRoute>
            <Review />
          </ProtectedRoute>
        } />
        <Route path="/payment" element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        } />
        <Route path="/business" element={
          <ProtectedRoute>
            <Business />
          </ProtectedRoute>
        } />
        <Route path="/package" element={
          <ProtectedRoute>
            <Package />
          </ProtectedRoute>
        } />
        <Route path="/payment-success" element={
          <ProtectedRoute>
            <PaymentSuccess />
          </ProtectedRoute>
        } />
<Route path="/Chat" element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        } />
        {/* If route not found, redirect to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
