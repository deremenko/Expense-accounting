import Spend from '../Spend';
import './styles.css';

function SpendList(props) {
  return (
    <div>
      {props.spends.map((spend, index) => (
        <Spend 
          key={spend.id}
          keyEditedSpend={props.keyEditedSpend} 
          spend={spend} 
          index={index} 
          stylesEditButtons={props.stylesEditButtons}
          handleEditSpendButton={props.handleEditSpendButton}
          handleEditChange={props.handleEditChange}
          clickEditConfir={props.clickEditConfir} 
          clickEditCancel={props.clickEditCancel}
          idEditedSpend={props.idEditedSpend}
          editSpend={props.editSpend}
          deleteSpend={props.deleteSpend} 
        />
      ))}
    </div>
  );

}

export default SpendList;