import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormDelivery({ handleChange, input, validation }) {
  const handleValidation = (value) => {
    if (value === "good") return "success";
    if (value === "error") return "error";
  };

  return (
    <>
      <section className="form-container-delivery">
        <div className="form-name">
          <h1>Delivery details</h1>
          <div>
            <div className="checkbox">
              <input
                name="checkbox"
                type="checkbox"
                id="dropshipper"
                value="dropshipper"
                checked={input.checkbox}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label htmlFor="dropshipper">Send as a dropshipper</label>
              <span className="checkmark"></span>
            </div>
          </div>
        </div>
        <div className="form-delivery">
          <div className="form-one">
            <input
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className={handleValidation(validation.email)}
              required
            />
            <input
              placeholder="Phone Number"
              type="text"
              id="phone"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={handleChange}
              className={handleValidation(validation.phoneNumber)}
              required
            />
            <textarea
              placeholder="Delivery Address"
              type="text"
              id="dropshipper"
              name="deliveryAddress"
              value={input.deliveryAddress}
              onChange={handleChange}
              maxLength={120}
              className={handleValidation(validation.deliveryAddress)}
              required
            />
            <span className="characters-limited">
              {120 - input.deliveryAddress.length} characters remaining
            </span>
          </div>
          <div className="form-two">
            <input
              placeholder="Dropshipper name"
              type="text"
              id="email"
              name="dropshipper"
              value={input.dropshipper}
              onChange={handleChange}
              className={handleValidation(validation.dropshipper)}
              required
            />
            <input
              placeholder="Dropshipper phone number"
              type="text"
              id="phone"
              name="dropshipperNumb"
              value={input.dropshipperNumb}
              onChange={handleChange}
              className={handleValidation(validation.dropshipperNumb)}
              required
            />
          </div>
        </div>
      </section>
    </>
  );
}
