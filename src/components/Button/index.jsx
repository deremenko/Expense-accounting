import './styles.css';

const Button = ({ 
  actionButton, 
  buttonIcon, 
  nameIcon, 
  textButton,
  type, 
  buttonClass=''
}) => {
  return (
    <button 
      onClick={actionButton} 
      className ={`button ${buttonClass}`}
      type={type}
    >
      <img src={buttonIcon} alt={nameIcon} />
      <span>{textButton}</span>
    </button>
  );
}

export default Button;