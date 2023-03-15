import Button from "../../../component/Button";
import TextInput from "../../../component/TextInput";

const StepOne = ({ handleNext, currentStep, setCurrentStep }) => {
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className="steps-container">
      <div className="step--title">
        <p>Hey 👋🏽</p>
        <p>Welcome to Roqqu</p>
      </div>
      <div className="step--description">
        <p>
          Let's get to know you! <br /> We’ll need you to choose a really cool
          name that other users can find you with, choose something cool like
          superman, or batman 😜
        </p>
      </div>

      <form>
        <div className="step--form">
          <TextInput
            type="text"
            label="Username"
            placeholder="Enter username"
          />
          <span>
            <input type="checkbox" /> I agree to Roqqu's Terms & conditions and
            Privacy Policy
          </span>
        </div>
        <div className="step--action">
          <Button onClick={handleNextStep} />
        </div>
      </form>
    </div>
  );
};

export default StepOne;
