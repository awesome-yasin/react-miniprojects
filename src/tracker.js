import React from 'react'

import Balance from './balance'
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from './GlobalState';
import './expense.css';
const Tracker = () =>{
    return(
        <>
        <h1 className = "tracker-heading expe">Expense Tracker</h1>
       
        <GlobalProvider>
     
      <div className="tracker">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
        </>
    )
}
export default Tracker