import React,{useState} from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App(){

 const [reload,setReload] = useState(false);

 const refresh = ()=>{
  setReload(!reload);
 };

 return(

  <div>

   <h1>Expense Tracker</h1>

   <AddExpense reload={refresh}/>
   <ExpenseList key={reload}/>

  </div>

 );

}

export default App;