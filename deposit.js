function Deposit(){
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [depositAmt, setDepositAmt]   = React.useState(0);
  const [balance, setBalance]         = React.useState(100);
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
    balance = newBalance;
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
      title="Enter deposit amount below"
      status={status}
      body={show ? (  
              <>
              Balance<br/>
              value={balance} /><br/>
              Deposit<br/>
              <input type="input" className="form-control" id="depositAmt" placeholder="Enter Deposit Amount" value={depositAmt} /><br/>
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
