function Deposit(){
  
  function addBalance(){
    console.log(depositamount);
    if (!validate(deposit,     'deposit'))     return;
    setShow(false); 
    
  return (
    <Card
      bgcolor="dark"
      header="Deposit"
      title= "Balance:"
      status={status}
      body={show ? (  
              <>
              Deposit<br/>
              <input type="input" className="form-control" id="deposit" placeholder="Enter Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={addBalance}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
              </>
            )}
    />
  )
}
