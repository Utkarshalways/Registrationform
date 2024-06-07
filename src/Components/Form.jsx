import React from 'react'
import "./style/Form.scss"

const Form = () => {
  return (
    <div className="formbase">
      <h1 className="formtitle">Please fill this form</h1>

      <form action="" className="mainForm">
        <div className="row">
          <label htmlFor="">
            <input type="text" placeholder="First Name" className="forminput" />
          </label>

          <label htmlFor="">
            <input type="text" placeholder="Last Name" className="forminput" />
          </label>
        </div>

        <label htmlFor="">
          <input type="text" placeholder="Username" className="forminput" />
        </label>

        <label htmlFor="">
          <input type="text" placeholder="Email" className="forminput" />
        </label>

        <label htmlFor="">
          <input type="text" placeholder="Password" className="forminput" />
        </label>

        <label htmlFor="">
          <input
            type="Number"
            placeholder="Phone Number"
            className="forminput"
          />
        </label>

        <div className="row">
          
          <select name="country" className="forminput">
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>

        
          <select name="city" className="forminput">
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="">
            <input type="text" placeholder="Pan No" className="forminput" />
          </label>

          <label htmlFor="">
            <input
              type="text"
              placeholder="Aadhar Card"
              className="forminput"
            />
          </label>
        </div>
      </form>

      <button className="formsubmitbtn">Submit</button>
    </div>
  );
}

export default Form