import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext';

export const ExpenseFilter = () => {
    const { expenses, categories, setFilters, filters } = useContext(ExpenseContext);
    function handleChange(e) {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <div className='box-effect compo-title  mb-3'>
       
            <div className="compo-body">
            <h2> Filters </h2>
                <select name="category" onChange={handleChange} className="form-select">
                    <option value="">All</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}

                </select>
            </div>

        </div>
    )
}
