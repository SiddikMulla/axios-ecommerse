// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Catagory';
import Login from './components/Login';
import { UserProvider } from './contexts/UserContext'; // Import UserProvider

function App() {
  return (
    <Router>
      <UserProvider> {/* Wrap your app with UserProvider */}
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/category/:name" element={<Category />} /> {/* Correct the spelling of "category" */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
