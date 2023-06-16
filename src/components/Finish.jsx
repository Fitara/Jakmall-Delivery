export default function Finish({ handleBack }) {
  return (
    <>
      <div className="finish">
        <div className="order">
          <h1>Thank you</h1>
          <p className="order-id">
            Order ID<span>:</span>
            <span>XXKYB</span>
          </p>
          <p className="order-message">
            Your order will be delivered today with GO-SEND
          </p>
        </div>
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
        </div>
      </div>
    </>
  );
}
