import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);


  const generateID = () => Math.round(Math.random() * 1000);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const isInputEmpty = submitAttempted && amount.trim() === '';

  const handleSave = () => {
    if (!desc || !amount) {
      setSubmitAttempted(true);
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      setSubmitAttempted(true)
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");

    setSubmitAttempted(false);
  };

  return (
    <>
        <C.Container onKeyDown={handleKeyDown} tabIndex="0">
            <C.InputContent>
              <C.Input 
              className={isInputEmpty ? 'input-error' : ''}
              placeholder="Descrição" 
              value={desc} 
              onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            <C.InputContent>
              <C.Input
                placeholder="R$"
                value={amount}
                type="number"
                className={isInputEmpty ? 'input-error' : ''}
                onChange={(e) => setAmount(e.target.value)}
              />
            </C.InputContent>
            <C.RadioGroup>
              <C.Input
                type="radio"
                id="rIncome"
                defaultChecked
                name="group1"
                onChange={() => setExpense(!isExpense)}
              />
              <C.Label htmlFor="rIncome">Entrada</C.Label>
              <C.Input
                type="radio"
                id="rExpenses"
                name="group1"
                onChange={() => setExpense(!isExpense)}
              />
              <C.Label htmlFor="rExpenses">Saída</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleSave}>ADICIONAR</C.Button>
        </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;