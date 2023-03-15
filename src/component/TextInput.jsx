const TextInput = ({ type, label, placeholder, icon }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <div className="input-layout">
        <input type={type} placeholder={placeholder} />
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default TextInput;
