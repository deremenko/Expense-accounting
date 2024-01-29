import Button from '../Button';
import trashBoxIcon from '../../svg/trash-box.svg';
import penIcon from '../../svg/pen.svg';
import './styles.css';

const Spend = ({
  index, 
  spend,
  deleteSpend, 
  handleEditedSpendButton,
}) => {
  return (
    <div className="spend">
      <p className="spend__name">{index + 1}){spend.text}</p>
      <p className="spend__date">{spend.date}</p>
      <p className="spend__amount">{spend.amount} p.</p>
      <Button
        buttonClass="button_spendStyle" 
        actionButton={() => handleEditedSpendButton(spend.id)}
        buttonIcon={penIcon}
        type="button"
      />
      <Button
        buttonClass="button_spendStyle"
        buttonIcon={trashBoxIcon}
        actionButton={() => deleteSpend(spend.id)}
        type="button"
      />
    </div>
  );
}

export default Spend;