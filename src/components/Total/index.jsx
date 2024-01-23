import './styles.css';

function Total(props) {
  return (
    <p className="total">Итого: {props.countTotal()} </p>
  );

}

export default Total;