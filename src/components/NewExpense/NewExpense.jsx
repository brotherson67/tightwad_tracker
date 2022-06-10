import React from "react";

// import styling
import "./NewExpense.css";

// import components
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

//
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
