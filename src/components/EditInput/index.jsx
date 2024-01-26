import Button from '../Button';
import InputLine from '../InputLine';
import checkMark from '../../svg/checkMark.svg';
import crossIcon from '../../svg/cross.svg';
import './styles.css';

const EditInput = ({ 
  handleTextChange, 
  changeSpend, 
  cancelEdit, 
  id,
  updatedValueSpend,
}) => {
  return (
    <>
      <div className="editInput__name">
        <InputLine 
          nameFieldObject={"text"} 
          handleInputValue={handleTextChange}
          value={updatedValueSpend.text}
        />
      </div>
      <div className="editInput__date">
        <InputLine 
          nameFieldObject={"date"} 
          handleInputValue={handleTextChange}
          value={updatedValueSpend.date}
        />
      </div>
      <div className="editInput__amount">
        <InputLine
          nameFieldObject={"amount"} 
          handleInputValue={handleTextChange}
          value={updatedValueSpend.amount}
        />
      </div>
      <Button
        isButtonStyle={false} 
        buttonIcon={checkMark}
        actionButton={() => changeSpend(id)}
      />
      <Button
        isButtonStyle={false} 
        buttonIcon={crossIcon}
        actionButton={cancelEdit}
      />
    </>
  );
}

export default EditInput;