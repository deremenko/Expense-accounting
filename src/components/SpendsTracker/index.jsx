import React, { useState, useEffect } from 'react';
import InputLine from '../InputLine';
import Button from '../Button';
import Spend from '../Spend';
import ErrorMessage from '../ErrorMessage';
import Total from '../Total';
import { initialSpending } from '../../constants.js';
import { generateUniqueId } from '../../helpers/generateUniqueId.js';
import { createTimesTamp } from '../../helpers/createTimesTamp.js';
import { validateInput } from '../../helpers/validateInput.js';
import './styles.css';

const SpendsTracker =() => {
  const [spends, setSpends] = useState([...initialSpending]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [inputSpend, setInputSpend] = useState({
    textSpend: '',
    amountSpent: '', 
  });
  const [error, setError] = useState({
    showError: false,
    textError: ''
  });
  const [idEditedSpend, setIdEditedSpend] = useState(null);
  const [updatedValueSpend, setUpdatedValueSpend] = useState({ 
    text: '',
    amount: '',
    date: '',
  });
  
  useEffect(() => {
    calcTotalAmount();
  }, [spends.length]);

  useEffect(() => {
    localStorage.setItem('spends', JSON.stringify(spends));
  }, []);

  const handleInputChange = (event, key) => {
    setInputSpend((prevState) => ({
      ...prevState,
      [key]: event.target.value 
    }));
  };

  const handleTextChange = (event, key) => {
    setUpdatedValueSpend((prevState) => ({
      ...prevState,
      [key]: event.target.value 
    }));
  };

  const calcTotalAmount = () => {
    const sum = spends.reduce((accumulator, spend) => {
        console.log(spend["amount"]);
        return accumulator + Number(spend["amount"]);
    }, 0);
    setTotalAmount(sum);
  };

  const handleEditedSpendButton = (idSpend) => {
    const indexSpend = spends.findIndex(item => item.id === idSpend);
    setIdEditedSpend(idSpend);
    setUpdatedValueSpend((prevState) => ({
      ...prevState,
      text: spends[indexSpend].text,
      date: spends[indexSpend].date,
      amount: spends[indexSpend].amount
    }))
  };

  const cancelEdit = () => { 
    setIdEditedSpend(null);
  };

  const changeSpend = (idSpend) => {
    setError(prevState => ({
      ...prevState,
      showError: false
    }));

    const validateText = validateInput(updatedValueSpend.text);
    if (!validateText) {
      setError({
        textError: 'Некорректно введено место расхода',
        showError: true
      });
      return;
    };

    if (isNaN(new Date(updatedValueSpend.date))) {
      setError({
        textError: 'Некорректно введена дата',
        showError: true
      });
      return;
    };

    if (!Number(updatedValueSpend.amount)) {
      setError({
        textError: 'Некорректно введена стоймость',
        showError: true
      });
      return;
    };

    const indexSpend = spends.findIndex(item => item.id === idSpend);
    spends[indexSpend] = {
      id: idSpend, 
      text: validateText, 
      date: updatedValueSpend.date,
      amount: updatedValueSpend.amount,
    }

    localStorage.setItem('spends', JSON.stringify(spends)); 
    setIdEditedSpend(null);
    setUpdatedValueSpend({
      text: '',
      amount: '',
      date: '',
    });
  }

  const addSpend = () => {
    setError(prevState => ({
      ...prevState,
      showError: false
    }));
    setIdEditedSpend(null);
    const validateText = validateInput(inputSpend.textSpend);

    if (!validateText) {
      setError({
        textError: 'Некорректно введено место расхода',
        showError: true
      });
      return;
    };

    if (!Number(inputSpend.amountSpent)) {
      setError({
        textError: 'Некорректно введена стоймость',
        showError: true
      });
      return;
    };

    spends.push({
      id: generateUniqueId(), 
      text: validateText, 
      date: createTimesTamp(),
      amount: inputSpend.amountSpent,
    });

    localStorage.setItem('spends', JSON.stringify(spends));
    setInputSpend(prevState => ({
      ...prevState,
      amountSpent: '',
      textSpend: '',
    }));
  }

  const deleteSpend = (idSpend) => {
    let spendsBuffer = spends.filter((spend) => {
      return spend.id !== idSpend;
    })

    localStorage.setItem('spends', JSON.stringify(spendsBuffer)); 
    setSpends( [...spendsBuffer]);
  };

  return (
    <div className="spendsTracker">
      <h className="spendsTracker__blockTitles">Учет моих расходов</h>
      <div className="spendsTracker__blockWhereSpent">
      {idEditedSpend === null && error.showError && (
          <ErrorMessage message={error.textError} />
        )}
        <InputLine
          inputheader={"Куда было потрачено"} 
          placeholder={"Куда было потрачено"} 
          value={inputSpend.textSpend} 
          handleInputValue={handleInputChange} 
          nameFieldObject={"textSpend"} 
        />
      </div>
      <div className="spendsTracker__blockHowMany">
        <InputLine 
          inputheader={"Сколько было потрачено"} 
          placeholder={"Сколько было потрачено"} 
          value={inputSpend.amountSpent} 
          handleInputValue={handleInputChange} 
          nameFieldObject={"amountSpent"} 
        />
      </div>
      <div className="spendsTracker__blockButtonAdd">
        <Button 
          textButton={"Добавить"} 
          actionButton={addSpend} 
          isButtonStyle={true} 
        />
      </div>
      <div className="spendsTracker__blockResult">
        <Total totalAmount={totalAmount} />
      </div>
      <div className="spendsTracker__blockListExpenses">
      {spends.map((spend, index) => (
        <Spend 
          key={spend.id}
          spend={spend} 
          index={index}
          error={error} 
          handleEditedSpendButton={handleEditedSpendButton}
          handleTextChange={handleTextChange}
          changeSpend={changeSpend} 
          cancelEdit={cancelEdit}
          idEditedSpend={idEditedSpend}
          updatedValueSpend={updatedValueSpend}
          deleteSpend={deleteSpend} 
        />
      ))}
      </div>
    </div>
  );
}

export default SpendsTracker;