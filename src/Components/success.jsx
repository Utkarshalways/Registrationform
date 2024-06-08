import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const formData = location.state || {};

  return (
    <div>
      <h2>Form Submitted Successfully!</h2>
      <div>
        <h3>Form Details:</h3>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Phone No.: {formData.phoneNo}</p>
        <p>Country: {formData.country}</p>
        <p>City: {formData.city}</p>
        <p>PAN No.: {formData.panNo}</p>
        <p>Aadhar No.: {formData.aadharNo}</p>
      </div>
    </div>
  );
};

export default Success;
