function ExpenseItem(props: any) {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = "Ferobol Insurance";
    const expenseAmount = "800 de lei mai scump ca anul trecut fml";
  return (
    <div>
      <div>{props.date}</div>
      <div>
        <h2>{props.title}</h2>
        <div>{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
