import { useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resumo";
import Form from "./components/Form";

interface ITransaction {
  amount: number;
  id: string;
  desc?: string;
  expense: boolean;
}
interface IExpense {
  expense: number;
}

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const amountExpense = transactionsList
    .filter((item: IExpense) => item.expense)
    .map((transaction: ITransaction) => Number(transaction.amount));

  const amountIncome = transactionsList
    .filter((item: IExpense) => !item.expense)
    .map((transaction: ITransaction) => Number(transaction.amount));

  const expense = amountExpense
    .reduce((acc: number, cur: number) => acc + cur, 0)
    .toFixed(2);
  const income = amountIncome
    .reduce((acc: number, cur: number) => acc + cur, 0)
    .toFixed(2);

  const total = income - expense;

  const handleAdd = (transaction: ITransaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
