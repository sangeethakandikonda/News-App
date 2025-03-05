import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email and password match
        const user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            setError("Invalid email or password!");
            return;
        }

        // Save user session and redirect
        localStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true);
        alert("✅ Login successful!");
        navigate("/"); // Redirect to home page
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <h2 className="text-center text-primary">Login</h2>
                {error && <p className="text-danger text-center">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <p className="mt-3 text-center">
                    Don't have an account? <a href="/signup" className="text-decoration-none">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
