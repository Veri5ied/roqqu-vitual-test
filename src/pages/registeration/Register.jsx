import { useState } from "react";
import { RoqquLogo } from "../../assets";
import {
  StepOneForm,
  StepTwoForm,
  StepThreeForm,
  StepFourForm,
  StepFiveForm,
} from "./steps";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  return (
    <div className="register__container">
      <div className="register">
        <div className="register__logo">
          <img src={RoqquLogo} alt="" />
        </div>
        <div className="register__indicators">
          <span>Step {currentStep} / 5</span>
          <div className="register__grids">
            <div
              className={currentStep === 1 ? "step-grid active" : "step-grid"}
            ></div>
            <div
              className={currentStep === 2 ? "step-grid active" : "step-grid"}
            ></div>
            <div
              className={currentStep === 3 ? "step-grid active" : "step-grid"}
            ></div>
            <div
              className={currentStep === 4 ? "step-grid active" : "step-grid"}
            ></div>
            <div
              className={currentStep === 5 ? "step-grid active" : "step-grid"}
            ></div>
          </div>
        </div>
        <div className="register__forms">
          {currentStep === 1 && (
            <StepOneForm
              formData={formData}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          )}
          {currentStep === 2 && (
            <StepTwoForm
              formData={formData}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          )}
          {currentStep === 3 && (
            <StepThreeForm
              formData={formData}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          )}
          {currentStep === 4 && (
            <StepFourForm
              formData={formData}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          )}
          {currentStep === 5 && (
            <StepFiveForm
              formData={formData}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          )}
        </div>
        <span className="exitsing-account">
          Already have an account? <span>Sign in</span>
        </span>
      </div>
    </div>
  );
};

export default Register;
