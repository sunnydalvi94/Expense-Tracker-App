import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext';
export const ExpenseSummary = () => {
    const { expenses } = useContext(ExpenseContext);
    const total = expenses.reduce((sum, curExpense) => sum + curExpense.amount, 0);
    return (
        <div className='box-effect compo-title mt-3'>
            <div className="compo-body">
                <h2>Summary</h2>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Total Expenses Amount:
                        <span class="badge bg-success rounded-pill">{total}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Number of Expenses:
                        <span class="badge bg-primary rounded-pill">{expenses.length}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
