import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  // Add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  // Filter logic
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((e) => e.category === filter);

  // Total amount
  const totalAmount = filteredExpenses.reduce(
    (sum, e) => sum + e.amount,
    0
  );

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>💸 Personal Expense Tracker</h2>

      {/* Add Expense */}
      <ExpenseForm addExpense={addExpense} />

      {/* Filter Section */}
      <div style={{ marginTop: "15px" }}>
        <label><strong>Filter by Category:</strong></label>
        <br />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ marginTop: "5px" }}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      {/* Info Message */}
      <p style={{ marginTop: "10px" }}>
        Showing <strong>{filteredExpenses.length}</strong> expense(s)
        {filter !== "All" && <> in <strong>{filter}</strong></>}
      </p>

      {/* Total */}
      <h3>🧮 Total Spent: ₹{totalAmount}</h3>

      {/* Expense List */}
      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
      />

      {/* Empty State */}
      {expenses.length === 0 && (
        <p style={{ color: "gray", marginTop: "15px" }}>
          Start by adding your first expense 👆
        </p>
      )}
    </div>
  );
}

export default App;
