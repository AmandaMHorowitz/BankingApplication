function Deposit(){
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [depositAmt, setDepositAmt]   = React.useState(0);
  const [balance, setBalance]         = React.useState(0);
  const ctx                           = React.useContext(UserContext);
  
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  
  function handleSubmit(){
    let newBalance = balance + depositAmt;
    ctx.users.push({newBalance});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="dark"
      header="Deposit"
      title="Balance: ${newBalance}"
      status={status}
      body={show ? (  
              <>
              Deposit<br/>
              <input type="input" className="form-control" id="depositAmt" placeholder="Enter Deposit Amount" value={depositAmt} onChange={e => setBalance(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleSubmit}>Submit Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
              </>
            )}
    />
  );
}
