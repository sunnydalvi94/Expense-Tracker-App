import React, { useState, useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext';
import { ToastContainer, toast } from "react-toastify";

export const ExpenseForm = () => {
    const { addExpense, categories } = useContext(ExpenseContext);
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        category: categories[0],
        date: new Date().toISOString().split('T')[0]
    });


    function handleSubmit(e) {
        e.preventDefault();
        toast.success("New Expense Added.");
        addExpense({
            ...formData, amount: parseFloat(formData.amount)
        })
        setFormData({
            description: '',
            amount: '',
            category: categories[0],
            date: new Date().toISOString().split('T')[0]
        })

    }
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    return (
        <div className='compo-title box-effect'>
        <ToastContainer position="top-center" autoClose={3000} />
            <div className="compo-body">
            <h2>Form</h2>
                <form action="" onSubmit={handleSubmit} >
                    <input type="text" name='description' required value={formData.description} onChange={handleChange} placeholder='Enter Descripion..' className='form-control mb-3' maxLength={100} />
                    <input type="number" name='amount' required value={formData.amount} onChange={handleChange} placeholder='Enter Amount..' className='form-control mb-3'  maxLength={6} />

                    <select name="category" onChange={handleChange} className="form-select mb-3">
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}

                    </select>
                    <input type="date" name='date' value={formData.date} onChange={handleChange} className='form-date  mb-3' />
                    <button type='submit' className='btn btn-primary btn-block w-100'>Submit</button>
                    {/* <button type="button" class="btn btn-primary  btn-block">Block level button</button> */}
                </form>
            </div>
        </div>
    )
}
