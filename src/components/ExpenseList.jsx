import React, { useState, useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext';
import { ToastContainer, toast } from "react-toastify";
export const ExpenseList = () => {
    const { expenses, categories, deleteExpense, updateExpense } = useContext(ExpenseContext);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({
        description: '',
        amount: '',
        category: '',
        date: ''
    });
    function handleEditClick(exp) {
        setEditingId(exp.id);
        setEditForm({
            description: exp.description,
            amount: exp.amount.toString(),
            category: exp.category,
            date: exp.date
        })
    }
    function handleEditSubmit(e) {
        e.preventDefault();
        toast.success("Updated Expense Successfully");
        updateExpense(editingId, {
            ...editForm, amount: parseFloat(editForm.amount)
        })
        setEditingId(null);
    }
    function handleEditChange(e) {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <div className='expense-list compo-title box-effect'>
            <div className="compo-body">
                <h2 className=' mb-3'>Expenses list</h2>
                {expenses.length === 0 ?
                    (<p className=''>No Expense yet</p>) :
                    (
                        < >
                            {expenses.map((exp, index) => (
                                <span key={index} >


                                    {
                                        editingId === exp.id ?
                                            (
                                                <form action="" onSubmit={handleEditSubmit} className='edit-form d-flex align-items-center py-2'>
                                                    <span className='fw-bold me-5'>{index + 1}</span>
                                                    <input type="text" name='description' value={editForm.description} onChange={handleEditChange} className='form-control' /> <br />
                                                    <input type="number" name='amount' value={editForm.amount} onChange={handleEditChange} className='form-control' /> <br />
                                                    <select name="category" onChange={handleEditChange} className="form-select" >
                                                        {categories.map((cat, index) => (
                                                            <option key={index} value={cat}>{cat}</option>
                                                        ))}

                                                    </select><br />
                                                    <input type="date" name='date' value={editForm.date} onChange={handleEditChange} className='form-control me-2' />
                                                    <button type='submit' className='btn btn-success me-1'><i className="bi bi-save "></i></button>
                                                    <button onClick={() => deleteExpense(exp.id)} className='btn btn-danger '>    <i className="bi bi-trash"></i></button>
                                                    {/* <button type='submit'>cancel</button> */}
                                                </form>
                                            ) :
                                            (
                                                <>
                                                    <ul className="list-group list-group-horizontal border-bottom py-2 align-items-center">
                                                        <li className="list-group-item border-0 fw-bold">{index + 1}</li>
                                                        <li className="list-group-item border-0 col-3">{exp.description}</li>
                                                        <li className="list-group-item border-0 col-2">{exp.amount}</li>
                                                        <li className="list-group-item border-0 col-2">{exp.category}</li>
                                                        <li className="list-group-item border-0 col-2">{new Date(exp.date).toLocaleDateString()}</li>
                                                        <li className="list-group-item border-0 col-2 d-flex gap-1">
                                                            <button
                                                                type="submit"
                                                                onClick={() => handleEditClick(exp)}
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                <i className="bi bi-pencil"></i>
                                                            </button>
                                                            <button onClick={() => deleteExpense(exp.id)} className="btn btn-danger btn-sm">
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </li>
                                                    </ul>


                                                </>
                                            )
                                    }
                                </span>
                            ))}
                        </>
                    )
                }
            </div>

        </div>
    )
}
