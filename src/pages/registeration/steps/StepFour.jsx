import Button from "../../../component/Button";
import TextInput from "../../../component/TextInput";

const StepFour = ({ currentStep, setCurrentStep }) => {
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className="steps-container">
      <div className="step--title">
        <p>Thank you Alvin👋🏽</p>
        <p>Enter your email and create a password</p>
      </div>
      <form>
        <div className="step--form">
          <TextInput type="email" placeholder="example@gmail.com" />
          <TextInput type="password" placeholder="******" />
        </div>
        <div className="step--action">
          <Button onClick={handleNextStep} />
        </div>
      </form>
    </div>
  );
};

export default StepFour;
