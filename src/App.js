import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "./api/api";
import AddExpense from "./components/AddExpense";
import Expense from "./components/ExpenseList";

function App() {

  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(`${API_URL}/expenses`);
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>

      <AddExpense reload={fetchExpenses} />

      {expenses.map((exp) => (
        <Expense key={exp.id} expense={exp} />
      ))}
    </div>
  );
}

export default App;