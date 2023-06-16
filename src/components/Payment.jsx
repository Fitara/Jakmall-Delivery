export default function Shipment() {
  return (
    <>
      <div className="payment">
        <h1>Shipment</h1>
        <div className="payment-child">
          <label htmlFor="go-send" id="go-send" className="active">
            <span style={{ fontSize: 13 }}>GO-SEND</span>
            <span style={{ fontWeight: "bold" }}>15,000</span>
            <input type="radio" value="GO-SEND" />
          </label>
          <label htmlFor="jne" id="jne">
            <span style={{ fontSize: 13 }}>JNE</span>
            <span style={{ fontWeight: "bold" }}>9,000</span>
            <input type="radio" value="JNE" />
          </label>
          <label htmlFor="private" id="private">
            <span style={{ fontSize: 13 }}>Personal Courier</span>
            <span style={{ fontWeight: "bold" }}>29,000</span>
            <input type="radio" value="Personal Courier" />
          </label>
        </div>
        <h1 style={{ marginTop: 50 }}>Payment</h1>
        <div className="payment-child">
          <label htmlFor="go-send" id="go-send">
            <span style={{ fontSize: 13 }}>GO-SEND</span>
            <span style={{ fontWeight: "bold" }}>15,000</span>
            <input type="radio" value="GO-SEND" />
          </label>
          <label htmlFor="jne" id="jne">
            <span style={{ fontSize: 13 }}>JNE</span>
            <span style={{ fontWeight: "bold" }}>9,000</span>
            <input type="radio" value="JNE" />
          </label>
          <label htmlFor="private" id="private">
            <span style={{ fontSize: 13 }}>Personal Courier</span>
            <span style={{ fontWeight: "bold" }}>29,000</span>
            <input type="radio" value="Personal Courier" />
          </label>
        </div>
      </div>
    </>
  );
}
