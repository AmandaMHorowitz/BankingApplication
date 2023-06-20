function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    
    <div class="card-group">
       <div class="card">
          <div class="card-body">
             <h5 class="card-title">Name</h5>
             <p class="card-text">ctx.name</p>
          </div>
       </div>
       <div class="card">
          <div class="card-body">
             <h5 class="card-title">Email Address</h5>
             <p class="card-text">ctx.email</p>
          </div>
       </div>
       <div class="card">
          <div class="card-body">
             <h5 class="card-title">Password</h5>
             <p class="card-text">ctx.password</p>
          </div>
       </div>
    </div>
  ); 
}