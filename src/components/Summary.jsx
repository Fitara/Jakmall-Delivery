import Button from "./Button";
import { useEffect } from "react";

export default function Summary({ handleSubmit, handleBack, step, input }) {
  const getEstimation = () => {
    let estimation = "";

    if (input.shipmentType === "GO-SEND") {
      estimation = "Today";
    } else if (input.shipmentType === "JNE") {
      estimation = "2 days";
    } else {
      estimation = "1 day";
    }

    return estimation;
  };

  const totalCost = () => {
    let result = 500000;

    if (input.checkbox === true) result += 5900;
    if (input.shipmentFee) result += parseInt(input.shipmentFee);

    const formattedResult = [];

    let digits = result.toString().split("");
    let count = 0;

    while (digits.length > 0) {
      formattedResult.unshift(digits.pop());
      count++;

      if (count === 3 && digits.length > 0) {
        formattedResult.unshift(",");
        count = 0;
      }
    }

    return formattedResult.join("");
  };

  return (
    <>
      <div className="summary">
        <div>
          <div className="summary-name">
            <h2>Summary</h2>
            <p>10 Items purchased</p>
          </div>
          <div style={{ fontWeight: "bold" }}>
            <div className="estimation">
              {input.shipmentType && (
                <div>
                  <p>Delivery estimation</p>
                  <p className="estimation-color">
                    {getEstimation()}
                    <span> by </span>
                    {input.shipmentType}
                  </p>
                </div>
              )}
            </div>
            {step === 3 && (
              <div className="payment-method">
                {input.paymentType && (
                  <div>
                    <p>Payment method</p>
                    <p className="payment-color">{input.paymentType}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="good-cost">
            <p>Cost of goods</p>
            <p style={{ fontWeight: "bold" }}>500,000</p>
          </div>
          {input.checkbox === true && (
            <div className="dropshipping-fee">
              <p>Dropshipping fee</p>
              <p style={{ fontWeight: "bold" }}>5,900</p>
            </div>
          )}

          {input.shipmentType && (
            <div className="shipment-method">
              <p style={{ fontWeight: "bold" }}>
                {input.shipmentType}
                <span style={{ fontWeight: "normal" }}> shipment</span>
              </p>
              <p style={{ fontWeight: "bold" }}>{input.shipmentFee}</p>
            </div>
          )}
          <div className="total">
            <h2>Total</h2>
            <h2>{totalCost()}</h2>
          </div>
          <Button
            handleSubmit={handleSubmit}
            handleBack={handleBack}
            input={input.paymentType}
            step={step}
          />
        </div>
      </div>
    </>
  );
}
