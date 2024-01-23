import './styles.css';

function Button(props) {
  return (
    <button 
      onClick={props.actionButton} 
      style={props.stylesButton}
      className ='button'
    >
      <img src={props.buttonIcon} alt={props.nameIcon} />
      <span>{props.textButton}</span>
    </button>
  );

}

export default Button;