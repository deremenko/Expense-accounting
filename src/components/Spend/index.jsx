import Button from '../Button';
import EditInput from '../EditInput';
import ErrorMessage from '../ErrorMessage';
import trashBoxIcon from '../../svg/trash-box.svg';
import penIcon from '../../svg/pen.svg';
import './styles.css';

const Spend = ({
  index, 
  spend,
  error, 
  deleteSpend, 
  handleEditedSpendButton,
  handleTextChange, 
  idEditedSpend,
  updatedValueSpend,
  changeSpend,
  cancelEdit
}) => {
  return (
    <div className="spend">
      {idEditedSpend === spend.id ? (
        <> 
        <div className='spend__errorBlock'>  
          {error.showError && (
            <ErrorMessage message={error.textError} />
          )}
        </div>    
          <EditInput
            isButtonStyle={false}  
            changeSpend={changeSpend}
            cancelEdit={cancelEdit}
            handleTextChange={handleTextChange}
            id={spend.id}
            updatedValueSpend={updatedValueSpend}
          />
        </>
      ) : (
        <>
          <p className="spend__name">{index + 1}){spend.text}</p>
          <p className="spend__date">{spend.date}</p>
          <p className="spend__amount">{spend.amount} p.</p>
          <Button
            isButtonStyle={false} 
            actionButton={() => handleEditedSpendButton(spend.id,)}
            buttonIcon={penIcon}
          />
          <Button
            isButtonStyle={false} 
            buttonIcon={trashBoxIcon}
            actionButton={() => deleteSpend(spend.id)}
          />
        </>
      )}
    </div>
  );
}

export default Spend;