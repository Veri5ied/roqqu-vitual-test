import Button from "../../../component/Button";
import TextInput from "../../../component/TextInput";

const StepTwo = ({ currentStep, setCurrentStep }) => {
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className="steps-container">
      <div className="step--title">
        <p>Hey Alvin👋🏽</p>
        <p>Please give us your legal name</p>
      </div>
      <form>
        <div className="step--form">
          <TextInput type="text" label="First Name" placeholder="e.g Jane" />
          <TextInput type="text" label="Last Name" placeholder="e.g Doe" />
        </div>
        <div className="step--action">
          <Button onClick={handleNextStep} />
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
