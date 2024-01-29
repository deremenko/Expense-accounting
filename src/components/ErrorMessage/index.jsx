import './styles.css';

const ErrorMessage = ({ message }) => {
  return (
    <label className="errorMessage">{message}</label>
  );
}

export default ErrorMessage;