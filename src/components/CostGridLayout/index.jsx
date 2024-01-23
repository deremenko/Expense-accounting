import React, { useState, useEffect } from 'react';
import InputLine from '../InputLine';
import Button from '../Button';
import SpendList from '../SpendList';
import ErrorMessage from '../ErrorMessage';
import Total from '../Total';
import { initialSpending } from '../../constants.js';
import { generateUniqueId } from '../../helpers/generateUniqueId.js';
import { createTimesTamp } from '../../helpers/createTimesTamp.js';
import { validateInput } from '../../helpers/validateInput.js';
import './styles.css';

function CostGridLayout() {
  const [spends, setSpends] = useState([...initialSpending]);
  const [placeholders, setPlaceholders] = useState(["Куда было потрачено", "Сколько было потрачено"]);
  const [inputSpend, setInputSpend] = useState({
    textSpend: '',
    expenseSpend: '',
  });
  const [showError, setShowError] = useState(false);
  const [textError, setTextError] = useState('Пожалуйста, введите корректные данные.');
  const [idEditedSpend, setIdEditedSpend] = useState(null);
  const [editSpend, setEditSpend] = useState({
    editedText: '',
    editedExpense: '',
    editedDate: '',
  });
  

  const stylesAddButton = {
    minHeight: "47px",
    minWidth: "120px",
    backgroundColor: "rgb(119, 197, 167)",
    border: "none",
    borderRadius: "5px",
    fontSize:"1.05em",
    cursor: "pointer",
  };

  const stylesEditButtons = {
    minHeight: "45px",
    minWidth: "45px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "rgba(197, 233, 255, 0.0)",
    margin: "0px 5px",
  };

  useEffect(() => {
    localStorage.setItem('spends', JSON.stringify(spends));
    return () => {};
  }, []);

  const handleInputChange = (event, key) => {
    setInputSpend((prevState) => ({
      ...prevState,
      [key]: event.target.value 
    }));
  };

  const handleEditChange = (event, key) => {
    setEditSpend((prevState) => ({
      ...prevState,
      [key]: event.target.value 
    }));
  };

  const handleAddSpendButton = () => {
    addSpend()
  };

  const countTotal = () => {
    const sum = spends.reduce((accumulator, spend) => {
        return accumulator + Number(spend["expense"]);
    }, 0);
    return sum
  };

  const handleEditSpendButton = (idSpend, index) => {
    setIdEditedSpend(idSpend);
    setEditSpend((prevState) => ({
      ...prevState,
      editedText: spends[index].text,
      editedDate: spends[index].date,
      editedExpense: spends[index].expense
    }))
  };

  const clickEditConfir = (index, idSpend) => {
    changeSpend(index, idSpend);
  };

  const clickEditCancel = () => {
    setIdEditedSpend(null);
  };

  const changeSpend = (index, idSpend) => {
    setShowError(false);
    let spendsClone = [...spends];
    const validateText = validateInput(editSpend.editedText);
    console.log(validateText);
    console.log(editSpend.editedExpense);
    console.log(editSpend.editedDate);
    if (!validateText || !Number(editSpend.editedExpense) || !Date(editSpend.editedDate)) {
      setShowError(true);
      return;
    };

    spendsClone[index] = {
      id: idSpend, 
      text: validateText, 
      date: editSpend.editedDate,
      expense: editSpend.editedExpense,
    }

    localStorage.setItem('spends', JSON.stringify(spends)); 
    setIdEditedSpend(null);
    setSpends([...spendsClone]);
    setEditSpend(prevState => ({
      editedText: '',
      editedExpense: '',
      editedDate: '',
    }));
  }

  const addSpend = () => {
    setShowError(false);
    setIdEditedSpend(null);
    let spendsClone = [...spends];
    const validateText = validateInput(inputSpend.textSpend);
    const validateExpense = validateInput(inputSpend.expenseSpend);

    if (!validateText || !Number(inputSpend.expenseSpend)) {
      setShowError(true);
      return;
    };

    spendsClone.push({
      id: generateUniqueId(), 
      text: validateText, 
      date: createTimesTamp(),
      expense: validateExpense,
    });

    localStorage.setItem('spends', JSON.stringify(spendsClone));
    setSpends([...spendsClone]);
    setInputSpend(prevState => ({
      ...prevState,
      expenseSpend: '',
      textSpend: '',
    }));
  }

  const deleteSpend = (idSpend) => {
    let spendsClone = spends.filter((spend) => {
      return spend.id !== idSpend;
    })

    localStorage.setItem('spends', JSON.stringify(spendsClone)); 
    setSpends( [...spendsClone]);
  };

  return (
    <div className="costGridLayout">
      <p className="costGridLayout__blockTitles">Учет моих расходов</p>
      <div className="costGridLayout__blockWhereSpent">
      {idEditedSpend === null && showError && (
          <ErrorMessage message={textError} />
        )}
        <p>Куда было потрачено</p>
        <InputLine 
          placeholder={placeholders[0]} 
          value={inputSpend.textSpend} 
          handleInputValue={handleInputChange} 
          keyStateObject={"textSpend"} 
        />
      </div>
      <div className="costGridLayout__blockHowMany">
        <p>Сколько было потрачено</p>
        <InputLine 
          placeholder={placeholders[1]} 
          value={inputSpend.expenseSpend} 
          handleInputValue={handleInputChange} 
          keyStateObject={"expenseSpend"} 
        />
      </div>
      <div className="costGridLayout__blockButtonAdd">
        <Button 
          textButton={"Добавить"} 
          actionButton={() => {handleAddSpendButton()}} 
          stylesButton={stylesAddButton} 
        />
      </div>
      <div className="costGridLayout__blockResult">
        <Total countTotal={countTotal} />
      </div>
      <div className="costGridLayout__blockListExpenses">
        <SpendList 
          spends={spends} 
          stylesEditButtons={stylesEditButtons} 
          deleteSpend={deleteSpend}
          clickEditConfir={clickEditConfir} 
          clickEditCancel={clickEditCancel}
          handleEditSpendButton={handleEditSpendButton}
          handleEditChange={handleEditChange} 
          idEditedSpend={idEditedSpend} 
          keyEditedSpend={["editedText","editedDate","editedExpense"]}
          editSpend={editSpend}
        />
      </div>
    </div>
  );

}

export default CostGridLayout;