import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
;
import Categories from "./components/Categories";
import Trending from "./components/Trending";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import PrivateRoute from "./routes/PrivateRoute"; 
import { AuthProvider } from "./Firebase/AuthContext"; // Import Firebase Auth Context
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="pt-20"> {/* Prevents content from hiding under fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/categories" element={<Categories />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            {/* Protected Dashboard Route */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Routes>
        </main>
        <Footer />
      </Router>

    </AuthProvider>
  );
}

export default App;
