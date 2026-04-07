import React, {useState} from "react";
import axios from "axios";
import API_URL from "../api/api";

function AddExpense({reload}) {

 const [title,setTitle] = useState("");
 const [amount,setAmount] = useState("");

 const submit = async (e) => {

  e.preventDefault();

  const expense = {
   id: Date.now().toString(),
   title,
   amount
  };

  await axios.post(`${API_URL}/expenses`, expense, {
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});

  setTitle("");
  setAmount("");

  reload();
 };

 return(

  <form onSubmit={submit}>

   <input
    placeholder="Title"
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
   />

   <input
    placeholder="Amount"
    value={amount}
    onChange={(e)=>setAmount(e.target.value)}
   />

   <button>Add Expense</button>

  </form>

 );
}

export default AddExpense;