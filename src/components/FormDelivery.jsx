import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-hook-form";

export default function FormDelivery({ handleChange, validation, register }) {

  const [validationRules] = useState({
    email: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
      minLength: {
        value: 6,
        message: "Email must be at least 6 digits",
      },
      maxLength: {
        value: 30,
        message: "Email can't exceed 30 digits",
      },
    },
    phoneNumber: {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]+$/,
        message: "Invalid phone number format",
      },
      minLength: {
        value: 6,
        message: "Phone number must be at least 6 digits",
      },
      maxLength: {
        value: 15,
        message: "Phone number can't exceed 15 digits",
      },
    },
    dropshipper: {
      required: "Dropshipper name is required",
      minLength: {
        value: 3,
        message: "Dropshipper name must be at least 3 characters",
      },
      maxLength: {
        value: 30,
        message: "Dropshipper name can't exceed 30 characters",
      },
    },
    dropshipperNumb: {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]+$/,
        message: "Invalid phone number format",
      },
      minLength: {
        value: 6,
        message: "Phone number must be at least 6 digits",
      },
      maxLength: {
        value: 20,
        message: "Phone number can't exceed 20 digits",
      },
    },
    deliveryAddress: {
      required: "Delivery address is required",
      minLength: {
        value: 10,
        message: "Delivery address must be at least 10 characters",
      },
      maxLength: {
        value: 120,
        message: "Delivery address can't exceed 120 characters",
      },
    },
  });

  const [previousValidation, setPreviousValidation] = useState({});
  const [currentToasts, setCurrentToasts] = useState({});
  const [remainingCharacters, setRemainingCharacters] = useState(120);

  const showToastNotification = (fieldName, errorMessage) => {
  const toastId = `validation-toast-${fieldName}-${errorMessage}`;
  if (!currentToasts[toastId]) {
    toast.error(errorMessage, {
      toastId,
    });
    setCurrentToasts((prevToasts) => ({ ...prevToasts, [toastId]: true }));
  }
};

  const handleClass = (fieldName) => {
    const fieldValue = validation && validation[fieldName] ? validation[fieldName] : "";
    const validationError = previousValidation && previousValidation[fieldName];

    if (validationError) {
      showToastNotification(fieldName, validationError);
      return "input-error";
    } else if (fieldValue && fieldValue.length > 0) {
      return "input-success";
    } else {
      return "";
    }
  };
  
const handleInputChange = (e) => {
  const { name, value } = e.target;
  const rules = validationRules[name];

  if (rules) {
    let validationMessage = "";

    if (rules.pattern?.value && !rules.pattern.value.test(value)) {
      validationMessage = rules.pattern.message;
    } else if (rules.minLength?.value && value.length < rules.minLength.value) {
      validationMessage = rules.minLength.message;
    } else if (rules.maxLength?.value && value.length > rules.maxLength.value) {
      validationMessage = rules.maxLength.message;
    }

    setPreviousValidation((prev) => ({
      ...prev,
      [name]: validationMessage,
    }));

    if (rules.maxLength?.value && value.length > rules.maxLength.value) {
      e.target.value = value.slice(0, rules.maxLength.value);
    }

    validation[name] = value;

    // console.log(validation,"<<<");

    if (name === "deliveryAddress") {
      setRemainingCharacters(121 - value.length);
    }
  }
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
                onChange={handleChange}
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
                className={`input-field ${handleClass("email")}`}
              {...register("email", validationRules.email)}

                onChange={handleInputChange}
              />
              <input
                placeholder="Phone Number"
                type="text"
                id="phoneNumber"
              name="phoneNumber"
            className={handleClass("phoneNumber")}
              {...register("phoneNumber", validationRules.phoneNumber)}
              onChange={handleInputChange}
              />
              <textarea
                placeholder="Delivery Address"
                id="deliveryAddress"
                name="deliveryAddress"
                className={handleClass("deliveryAddress")}
                {...register("deliveryAddress", validationRules.deliveryAddress)}
                onChange={handleInputChange}
              />
              <span className="characters-limited">
                {remainingCharacters} characters remaining
              </span>
            </div>
            <div className="form-two">
              <input
                placeholder="Dropshipper name"
                type="text"
                id="dropshipper"
                name="dropshipper"
                className={handleClass("dropshipper")}
                {...register("dropshipper", validationRules.dropshipper)}
                onChange={handleInputChange}
              />

              <input
                placeholder="Dropshipper phone number"
                type="text"
                id="dropshipperNumb"
                name="dropshipperNumb"
                className={handleClass("dropshipperNumb")}
                {...register("dropshipperNumb", validationRules.dropshipperNumb)}
                onChange={handleInputChange}
              />
            </div>
          </div>
      </section>
    </>
  );
}
