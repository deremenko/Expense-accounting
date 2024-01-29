import './styles.css';

const InputLine = ({ 
  inputheader,
  placeholder, 
  handleInputValue, 
  nameFieldObject, 
  value,
  inputId 
}) => {
  return (
    <div className="inputLine">
      <label htmlFor={inputId}>{inputheader}</label>
      <input
        id={inputId}
        type="text"
        className="inputLine__body"
        placeholder={placeholder}
        onChange={(event) => handleInputValue(event)}
        value={value}
        name={nameFieldObject}
      />
    </div>
  );
}

export default InputLine;