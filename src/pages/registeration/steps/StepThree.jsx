import Button from "../../../component/Button";
import TextInput from "../../../component/TextInput";

const StepThree = ({ currentStep, setCurrentStep }) => {
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className="steps-container">
      <div className="step--title">
        <p>Thank you Alvin👋🏽</p>
        <p>Let's Have your Phone Number</p>
      </div>
      <form>
        <div className="step--form">
          <TextInput type="tels" placeholder="+234" />
        </div>
        <div className="step--action">
          <Button onClick={handleNextStep} />
        </div>
      </form>
    </div>
  );
};

export default StepThree;
