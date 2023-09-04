import "../App.css";
import { useState } from "react";
import FormDelivery from "./FormDelivery";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Summary from "./Summary";
import Payment from "./Payment";
import Finish from "./Finish";

export default function Delivery() {

  const {
    register,
    handleSubmit
  } = useForm();

  const [validation] = useState({
    email: "",
    phoneNumber: "",
    dropshipper: "",
    dropshipperNumb: "",
    deliveryAddress: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    dropshipper: "",
    dropshipperNumb: "",
    deliveryAddress: "",
  });

  const [input, setInput] = useState({
    email: "",
    phoneNumber: "",
    dropshipper: "",
    paymentType: "e-Wallet",
    dropshipperNumb: "",
    deliveryAddress: "",
    shipmentType: "",
    shipmentFee: "",
    checkbox: false,
  });

  const [step, setStep] = useState(1);

  let backText = "Back to cart";

  if (step === 2) {
    backText = "Back to Delivery";
  } else if (step === 3) {
    backText = "Go to homepage";
  }

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "checkbox") {
      value = !input.checkbox;
    } else if (name === "shipmentType") {
      if (value === "GO-SEND") {
        setInput((prevData) => ({
          ...prevData,
          shipmentFee: "15000",
        }));
      } else if (value === "JNE") {
        setInput((prevData) => ({
          ...prevData,
          shipmentFee: "9000",
        }));
      } else if (value === "Personal Courier") {
        setInput((prevData) => ({
          ...prevData,
          shipmentFee: "29000",
        }));
      }
      setFormData((prevData) => ({
      ...prevData,
      }));
      

      console.log("Updated FormData:", formData);
    }

    setInput((prevData) => ({
      ...prevData,
      [name]:
        name === "checkbox"
          ? !prevData.checkbox
          : value.substr(0, name === "deliveryAddress" ? 120 : 40),
    }));
  };

  const onSubmit = (data) => {
    let isValid = true;
    let toastMessage = "";

    if (step === 1) {
      if (
        !data.email ||
        !data.phoneNumber ||
        !data.dropshipper ||
        !data.dropshipperNumb ||
        !data.deliveryAddress
      ) {
        isValid = false;
        toastMessage = "Please complete all the required fields!";
      }
    } else if (step === 2) {
      if (!input.shipmentType) {
      isValid = false;
      toastMessage = "Please select a shipment option!";
      }
    }

    if (isValid) {
    const index = step + 1;
    if (index <= 3) {
      setStep(index);

      switch (step) {
        case 1:
          toastMessage = "Form submitted successfully!";
          break;
        case 2:
          toastMessage = "Payment successfully!";
          break;
      }

      toast.success(toastMessage);
      }
    } else {
      toast.error(toastMessage);
    }
};

  const handleBack = () => {
      let index = step - 1;
      let home = step - 2;

    if (index >= 1 && step !== 3) {
      setStep(index);

      if (step === 3) {
        // console.log("Form Delivery Data:", validation); // Tambahkan ini
      }
    } else if (step === 3) {
      setStep(home);
      toast.success("Successfully returned to the homepage!");
    }
  };

  return (
    <section className="container-delivery">
      <div className="back-button">
        {step !== 3 && (
          <div onClick={handleBack} className="back-button-child">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="20"
              style={{ marginRight: 6 }}
            >
              <path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z" />
            </svg>
            <p className="">{backText}</p>
          </div>
        )}
        {step !== 3 && (
          <div>
            <div className="stepper">
              <div className="stepper-child">
                <div>
                  <span>1</span>
                  <span
                    style={{ color: "orange", marginRight: 2, fontSize: 14 }}
                  >
                    Delivery
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="16"
                  style={{ fill: "orange", marginRight: 6 }}
                >
                  <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
                </svg>
                <div>
                  <span>2</span>
                  <span
                    style={{ color: "orange", marginRight: 2, fontSize: 14 }}
                  >
                    Payment
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="16"
                  style={{ fill: "orange", marginRight: 6 }}
                >
                  <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
                </svg>
                <div>
                  <span>3</span>
                  <span
                    style={{ color: "orange", marginRight: 2, fontSize: 14 }}
                  >
                    Finish
                  </span>
                </div>
              </div>
            </div>
            <div className="estimation"></div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className="stepper" style={{ top: -68 }}>
              <div className="stepper-child">
                <div>
                  <span>1</span>
                  <span
                    style={{ color: "orange", marginRight: 2, fontSize: 14 }}
                  >
                    Delivery
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="16"
                  style={{ fill: "orange", marginRight: 6 }}
                >
                  <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
                </svg>
                <div>
                  <span>2</span>
                  <span
                    style={{ color: "orange", marginRight: 2, fontSize: 14 }}
                  >
                    Payment
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="16"
                  style={{ fill: "orange", marginRight: 6 }}
                >
                  <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
                </svg>
                <div>
                  <span>3</span>
                  <span
                    style={{ color: "orange", marginRight: 2, fontSize: 14 }}
                  >
                    Finish
                  </span>
                </div>
              </div>
            </div>
            <div className="estimation" style={{ marginTop: 48 }}></div>
          </div>
        )}
      </div>
      <div className="estimation" style={{ marginTop: 48 }}></div>
      <form className="delivery" onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <FormDelivery
            handleChange={handleChange}
            register={register}
            validation={validation}
          />
        )}
        {step === 2 && (
          <Payment
            handleChange={handleChange}
            validation={validation}
            input={input}
          />
        )}
        {step === 3 && (
          <Finish
            handleChange={handleChange}
            handleBack={handleBack}
            step={step}
          />
        )}
        {step !== 3 && (
          <Summary
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBack={handleBack}
            input={input}
            step={step}
          />
        )}
        {step === 3 && (
          <div style={{ marginTop: 48 }}>
            <Summary
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleBack={handleBack}
              input={input}
              step={step}
            />
          </div>
        )}
      </form>
    </section>
  );
}
