import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";
import Login from "./Login";
import Signup from "./Signup";

const NewsPage = ({ country }) => {
    let { category } = useParams(); // Get category from URL
    return <NewsBoard category={category || "general"} />;
};

const App = () => {
    const [category, setCategory] = useState("general");
    const [country, setCountry] = useState("us");
    const [isAuthenticated, setIsAuthenticated] = useState(false); // ✅ Add authentication state

    return (
        <Router>
            <Navbar setCategory={setCategory} setCountry={setCountry} />
            <Routes>
                <Route path="/" element={<NewsBoard category={category} country={country} />} />
                <Route path="/:category" element={<NewsPage country={country} />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> 
                {/* ✅ Pass setIsAuthenticated to Login */}
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
