import React, { useState } from "react";
import axios from "axios";
import API_URL from "../api/api";

function AddExpense({ reload }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API_URL, {
        title: title,
        amount: parseFloat(amount)
      });

      setTitle("");
      setAmount("");
      reload();
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;