import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Form.scss"

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "E-mail is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phoneNo) newErrors.phoneNo = "Phone No. is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.panNo) newErrors.panNo = "PAN No. is required";
    if (!formData.aadharNo) newErrors.aadharNo = "Aadhar No. is required";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/success", { state: formData });
    }
  };

  return (
    <div className="formbase">
      <h2 className="formtitle">Please Fill this form</h2>
      <form onSubmit={handleSubmit} className="mainForm">
        <div className="col">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="forminput"
          />
          {<span>{errors.firstName}</span>}
        </div>
        <div className="col">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="forminput"
          />
          {<span>{errors.lastName}</span>}
        </div>
        <div className="col">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            className="forminput"
          />
          {<span>{errors.username}</span>}
        </div>
        <div className="col">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="forminput"
          />
          {<span>{errors.email}</span>}
        </div>

        <div className="col">
          <div className="row">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="forminput"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="formsubmitbtn"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {<span>{errors.password}</span>}
        </div>
        <div className="col">
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Phone no"
            className="forminput"
          />
          {<span>{errors.phoneNo}</span>}
        </div>

        <div className="col">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="forminput"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {<span>{errors.country}</span>}
        </div>
        <div className="col">
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="forminput"
          >
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
          </select>
          {<span>{errors.city}</span>}
        </div>

        <div className="col">
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            placeholder="Pan no"
            className="forminput"
          />
          {<span>{errors.panNo}</span>}
        </div>
        <div className="col">
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            placeholder="aadhar No"
            className="forminput"
          />
          {<span>{errors.aadharNo}</span>}
        </div>
        <button type="submit" disabled={!isFormValid} className="formsubmitbtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
