import './styles.css';

function InputLine(props) {

  return (
    <input className="inputLine" 
      placeholder={props.placeholder}
      onChange={(event) => {props.handleInputValue(event,props.keyStateObject)}}
      value={props.value}
    />
  );

}

export default InputLine;