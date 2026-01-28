function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses found</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title} - ₹{expense.amount} ({expense.category})
          <button onClick={() => deleteExpense(expense.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
