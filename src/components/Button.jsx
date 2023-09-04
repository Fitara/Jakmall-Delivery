export default function Button({ handleSubmit, step, input }) {
  let buttonText = "";

  if (step === 1) {
    buttonText = "Continue to Payment";
  } else if (step === 2) {
    buttonText = `Pay with ${input}`;
  } else {
    return null;
  }

  return (
    <div>
      {step !== 3 && (
        <button type="submit" className="button-submit">
          {buttonText}
        </button>
      )}
    </div>
  );
}
