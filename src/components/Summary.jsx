import Button from "./Button";

export default function Summary({ handleSubmit }) {
  return (
    <>
      <div className="summary">
        <div className="summary-name">
          <h2>Summary</h2>
          <p>10 Items purchased</p>
        </div>
        <div>
          <div className="good-cost">
            <p>Cost of goods</p>
            <p style={{ fontWeight: "bold" }}>500,000</p>
          </div>
          <div className="dropshipping-fee">
            <p>Dropshipping fee</p>
            <p style={{ fontWeight: "bold" }}>5,900</p>
          </div>
          <div className="total">
            <h2>Total</h2>
            <h2>505,900</h2>
          </div>
          <Button handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}
