import './styles.css';

function ErrorMessage(props) {
  return (
    <p className='errorMessage'>{props.message}</p>
  );
}

export default ErrorMessage;