import './styles.css';

const Button = ({ actionButton, buttonIcon, nameIcon, textButton, isButtonStyle }) => {
const buttonClass = isButtonStyle ? 'addStyle' : 'spendStyle';

  return (
    <button 
      onClick={actionButton} 
      className ={`button button_${buttonClass}`}
      type='button'
    >
      <img src={buttonIcon} alt={nameIcon} />
      <span>{textButton}</span>
    </button>
  );
}

export default Button;