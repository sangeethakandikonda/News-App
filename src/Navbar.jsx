import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setCategory}) => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Top News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {["technology", "business", "health", "sports", "entertainment"].map((cat) => (
                            <li className="nav-item" key={cat}>
                                <Link className="nav-link" to={`/${cat}`} onClick={() => setCategory(cat)}>
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    

                    {/* Login/Signup Links */}
                    <ul className="navbar-nav ms-3">
                        <li className="nav-item">
                            <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary" to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
