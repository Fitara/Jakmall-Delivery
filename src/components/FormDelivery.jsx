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
          <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="dropshipper">Send as a dropshipper</label>
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
              className={handleValidation(validation.deliveryAddress)}
              required
            />
          </div>
          <div className="form-two">
            <input
              placeholder="Dropshipper name"
              type="text"
              id="email"
              name="dropshipper"
              value={input.dropshipper}
              onChange={handleChange}
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
