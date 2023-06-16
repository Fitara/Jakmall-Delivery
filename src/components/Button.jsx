export default function Button({handleSubmit}) {
  return (
    <button type="submit" onClick={handleSubmit} className="button-submit">
      Continue to Payment
    </button>
  );
}
