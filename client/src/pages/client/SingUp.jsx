import React, { useState } from "react";
import { UserRound, Mail, LockKeyhole, PhoneCall } from "lucide-react";
import "../../assets/css/client/Login_Singup/signup.css";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">
          <div className="logo-icon">S</div>
          <span>Sehat</span>
        </div>

        <div className="welcome-content">
          <h1 className="welcome-title">Welcome Back!</h1>
          <p className="welcome-subtitle">
            Login to manage your appointments, view test results, and stay
            connected with your healthcare team.
          </p>
          <button
            className="signin-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="right-panel">
        <div className="signup-form">
          <h2 className="form-title">Create Account</h2>

          <div className="social-buttons">
            <div className="social-btn">f</div>
            <div className="social-btn">G+</div>
            <div className="social-btn">in</div>
          </div>

          <div className="divider">or use your email for registration:</div>

          <div className="input-group">
            <span className="input-icon">
              <UserRound />
            </span>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Fullname"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <Mail />
            </span>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <LockKeyhole />
            </span>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <PhoneCall />
            </span>
            <input
              type="number"
              name="mobileNumber"
              className="form-input"
              placeholder="Mobile"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </div>

          <button className="signup-btn" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
