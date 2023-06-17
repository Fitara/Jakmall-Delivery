export default function Shipment({ handleChange, input }) {
  return (
    <>
      <div className="payment">
        <h1>Shipment</h1>
        <div className="payment-child">
          <label
            htmlFor="go-send"
            className={input.shipmentType == "GO-SEND" ? "active" : ""}
          >
            <span style={{ fontSize: 13 }}>GO-SEND</span>
            <span style={{ fontWeight: "bold" }}>15,000</span>
            <input
              name="shipmentType"
              id="go-send"
              type="radio"
              value="GO-SEND"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
          <label
            htmlFor="jne"
            className={input.shipmentType == "JNE" ? "active" : ""}
          >
            <span style={{ fontSize: 13 }}>JNE</span>
            <span style={{ fontWeight: "bold" }}>9,000</span>
            <input
              name="shipmentType"
              id="jne"
              type="radio"
              value="JNE"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
          <label
            htmlFor="personal"
            className={input.shipmentType == "Personal Courier" ? "active" : ""}
          >
            <span style={{ fontSize: 13 }}>Personal Courier</span>
            <span style={{ fontWeight: "bold" }}>29,000</span>
            <input
              name="shipmentType"
              id="personal"
              type="radio"
              value="Personal Courier"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
        </div>
        <h1 style={{ marginTop: 50 }}>Payment</h1>
        <div className="payment-child">
          <label
            htmlFor="e-wallet"
            className={input.paymentType == "e-Wallet" ? "active" : ""}
          >
            <span style={{ fontSize: 13 }}>e-Wallet</span>
            <span style={{ fontWeight: "bold" }}>15,000,000 left</span>
            <input
              name="paymentType"
              id="e-wallet"
              type="radio"
              value="e-Wallet"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
          <label
            htmlFor="bank-transfer"
            className={input.paymentType == "Bank Transfer" ? "active" : ""}
          >
            <span style={{ fontSize: 13 }}>Bank Transfer</span>
            <span style={{ fontWeight: "bold" }}>9,000</span>
            <input
              name="paymentType"
              id="bank-transfer"
              type="radio"
              value="Bank Transfer"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
          <label
            htmlFor="virtual-account"
            className={input.paymentType == "Virtual-account" ? "active" : ""}
          >
            <span style={{ fontSize: 13 }}>Virtual Account</span>
            <span style={{ fontWeight: "bold" }}>29,000</span>
            <input
              name="paymentType"
              id="virtual-account"
              type="radio"
              value="Virtual-account"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </label>
        </div>
      </div>
    </>
  );
}
