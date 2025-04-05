import { useState } from 'react'

import './App.css'
import { ExpenseForm } from './components/ExpenseForm'
import { ExpenseList } from './components/ExpenseList'
import { ExpenseSummary } from './components/ExpenseSummary'
import { ExpenseFilter } from './components/ExpenseFilter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' mb-3 main-title'> <img src="/src/assets/header-icon.jpg" alt="" /> Expense Tracker</h1>
      <div className='app-container'>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="left-side">
              <ExpenseForm />
              <ExpenseSummary/>
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div className="right-side">
            <ExpenseFilter/>
              <ExpenseList />
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
