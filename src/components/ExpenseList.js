import React from "react";

function Expense({ expense }) {
  return (
    <div>
      <h3>{expense.title}</h3>
      <p>₹{expense.amount}</p>
    </div>
  );
}

export default Expense;