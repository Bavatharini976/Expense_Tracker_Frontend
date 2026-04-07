import React,{useEffect,useState} from "react";
import axios from "axios";
import API_URL from "../api/api";

function ExpenseList(){

 const [expenses,setExpenses] = useState([]);

 const load = async ()=>{

  const res = await axios.get(`${API_URL}/expenses`, {
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});
  setExpenses(res.data);

 };

 useEffect(()=>{
  load();
 },[]);

 return(

  <div>

   <h2>Expenses</h2>

   {expenses.map(e=>(
    <div key={e.id}>
     {e.title} - ₹{e.amount}
    </div>
   ))}

  </div>

 );

}

export default ExpenseList;