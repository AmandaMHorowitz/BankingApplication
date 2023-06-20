function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
      txtcolor="black"
      header="Bank of Horowitz"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  ); 
}