import React from "react";
import axios from "axios";
import API_URL from "../api/api";

function Expense({ expense, reload }) {

  const deleteExpense = async () => {
    try {
      await axios.delete(`${API_URL}/expenses/${expense.id}`);
      reload(); // refresh list after delete
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div>
      <h3>{expense.title}</h3>
      <p>₹{expense.amount}</p>

      {/* ✅ DELETE BUTTON */}
      <button onClick={deleteExpense}>Delete</button>
    </div>
  );
}

export default Expense;