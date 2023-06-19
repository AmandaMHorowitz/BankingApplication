function Deposit(){
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [depositAmt, setDepositAmt]   = React.useState(0);
  const [balance, setBalance]         = React.useState(0);
  const ctx                           = React.useContext(UserContext);
  
  
  function handleSubmit(){
    let newBalance = balance + depositAmt;
    ctx.users.push({newBalance});
  };

  
  return (
    <Card
      bgcolor="dark"
      header="Deposit"
      title="Balance: "
      status={status}
      body={show ? (  
              <>
              Deposit<br/>
              <input type="input" className="form-control" id="depositAmt" placeholder="Enter Deposit Amount" value={depositAmt} onChange={e => setBalance(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleSubmit}>Submit Deposit</button>
              
    />
  );
}
