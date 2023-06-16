import "../App.css";
import { useState } from "react";
import FormDelivery from "./FormDelivery";
import Summary from "./Summary";
import Payment from "./Payment";
import Finish from "./Finish";

export default function Delivery() {
  const [input, setInput] = useState({
    email: "",
    phoneNumber: "",
    dropshipper: "",
    dropshipperNumb: "",
    deliveryAddress: "",
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "phoneNumber" && "dropshipperNumb") {
      value = value.replace(/[^0-9+()\-\s]/gi, "").substr(0, 20);
      if (value.length < 6) {
        setValidation((prevData) => ({
          ...prevData,
          phoneNumber: "error",
          dropshipperNumb: "error",
        }));
      }

      if (value.length === 20) {
        setValidation((prevData) => ({
          ...prevData,
          phoneNumber: "good",
          dropshipperNumb: "good",
        }));
      }
    }

    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("masuk");
    const index = step + 1;

    if (index <= 3) setStep(index);
  };

  const handleBack = () => {
    const index = step - 1;

    if (index >= 1) setStep(index);
  };

  const [validation, setValidation] = useState({
    phoneNumber: "",
    deliveryAddress: "",
    email: "",
  });

  return (
    <section className="container-delivery">
      <div className="back-button">
        <div onClick={handleBack} className="back-button-child">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="20"
            style={{ marginRight: 8 }}
          >
            <path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z" />
          </svg>
          <p className="">Back to cart</p>
        </div>
        <div className="stepper">
          <div className="stepper-child">
            <div>
              <span>1</span>
              <span style={{ color: "orange" }}>Delivery</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="16"
              style={{ fill: "orange", marginRight: "10px" }}
            >
              <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
            </svg>
            <div>
              <span>2</span>
              <span style={{ color: "orange" }}>Payment</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="16"
              style={{ fill: "orange", marginRight: "10px" }}
            >
              <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
            </svg>
            <div>
              <span>3</span>
              <span style={{ color: "orange" }}>Finish</span>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery">
        {step === 1 && (
          <FormDelivery
            handleChange={handleChange}
            input={input}
            validation={validation}
          />
        )}
        {step === 2 && (
          <Payment
            handleChange={handleChange}
            input={input}
            validation={validation}
          />
        )}
        {step === 3 && (
          <Finish handleChange={handleChange} handleBack={handleBack} />
        )}
        <Summary handleSubmit={handleSubmit} />
      </div>
    </section>
  );
}
