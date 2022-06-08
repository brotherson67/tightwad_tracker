import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 22.22, date: new Date(2022, 7, 31) },
  ];

  return (
    <div>
      <h2>Let's start the party</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
