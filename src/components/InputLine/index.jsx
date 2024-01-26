import './styles.css';

const InputLine = ({ 
  inputheader,
  placeholder, 
  handleInputValue, 
  nameFieldObject, 
  value 
}) => {
  return (
    <>
      <label>{inputheader}</label>
      <input
        type="text"
        className="inputLine"
        placeholder={placeholder}
        onChange={(event) => handleInputValue(event, nameFieldObject)}
        value={value}
      />
    </>
  );
}

export default InputLine;