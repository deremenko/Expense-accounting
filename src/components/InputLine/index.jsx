import './styles.css';

const InputLine = ({ 
  inputheader,
  placeholder, 
  handleInputValue, 
  nameFieldObject, 
  value 
}) => {
  return (
    <div className="inputLine">
      <label>{inputheader}</label>
      <input
        type="text"
        className="inputLine__body"
        placeholder={placeholder}
        onChange={(event) => handleInputValue(event, event.target.name)}
        value={value}
        name={nameFieldObject}
      />
    </div>
  );
}

export default InputLine;