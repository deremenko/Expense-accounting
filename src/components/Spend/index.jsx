import Button from '../Button';
import trashBoxIcon from '../../svg/trash-box.svg';
import InputLine from '../InputLine';
import penIcon from '../../svg/pen.svg';
import checkMark from '../../svg/checkMark.svg';
import crossIcon from '../../svg/cross.svg';
import './styles.css';

function Spend(props) {
  return (
    <div className="spend">
      {props.idEditedSpend === props.spend.id ? (
        <>
          <div className='spend__name'>
            <InputLine 
              keyStateObject={props.keyEditedSpend[0]} 
              handleInputValue={props.handleEditChange}
              value={props.editSpend.editedText}
            />
          </div>
          <div className='spend__date'>
            <InputLine 
              keyStateObject={props.keyEditedSpend[1]} 
              handleInputValue={props.handleEditChange}
              value={props.editSpend.editedDate}
            />
          </div>
          <div className='spend__expense'>
            <InputLine 
              keyStateObject={props.keyEditedSpend[2]} 
              handleInputValue={props.handleEditChange}
              value={props.editSpend.editedExpense}
            />
          </div>
          <Button
            stylesButton={props.stylesEditButtons}
            buttonIcon={checkMark}
            actionButton={() => props.clickEditConfir(props.index, props.id)}
          />
          <Button
            stylesButton={props.stylesEditButtons}
            buttonIcon={crossIcon}
            actionButton={() => props.clickEditCancel()}
          />
        </>
      ) : (
        <>
          <p className="spend__name">{props.index + 1}){props.spend.text}</p>
          <p className="spend__date">{props.spend.date}</p>
          <p className="spend__expense">{props.spend.expense} p.</p>
          <Button
            stylesButton={props.stylesEditButtons}
            actionButton={() => props.handleEditSpendButton(props.spend.id, props.index)}
            buttonIcon={penIcon}
          />
          <Button
            stylesButton={props.stylesEditButtons}
            buttonIcon={trashBoxIcon}
            actionButton={() => props.deleteSpend(props.spend.id)}
          />
        </>
      )}
    </div>
  );

}

export default Spend;