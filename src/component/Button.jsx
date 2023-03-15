const Button = ({ onClick }) => {
  return (
    <div className="button-container">
      <button onClick={onClick} type="button">
        <span>Continue</span>
      </button>
    </div>
  );
};

export default Button;
