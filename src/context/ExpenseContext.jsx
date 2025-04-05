import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("expenses")) || [];
    } catch (error) {
      console.error("Error loading expenses from localStorage:", error);
      return [];
    }
  });

  const [filters, setFilters] = useState({ category: "" });

  const categories = [
    "Food",
    "Ultility",
    "Transport",
    "Shopping",
    "Enterainment",
    "Other",
  ];
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
    toast.success(" Expense Deleted Successfully.");
  };
  const updateExpense = (id, updatedExp) => {
    setExpenses(
      expenses.map((prev) =>
        prev.id === id ? { ...prev, ...updatedExp } : prev
      )
    );
  };
  const filterExpenses = expenses.filter(
    (exp, index) => !filters.category || exp.category === filters.category
  );


  return (
    <>
      <ExpenseContext.Provider
        value={{
          expenses: filterExpenses,
          addExpense,
          categories,
          deleteExpense,
          updateExpense,
          filters,
          setFilters,
        }}
      >
        {children}
      </ExpenseContext.Provider>
    </>
  );
};
