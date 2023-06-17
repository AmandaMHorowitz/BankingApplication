function Spa() {
  const Route         = ReactRouterDOM.Route;
  const Link          = ReactRouterDOM.Link;
  const HashRouter    = ReactRouterDOM.HashRouter;
  return (
    <HashRouter>
        <div>
          <h1>Routing - Hello Enrique</h1>
          <Link to="/">Home</Link> --
          <Link to="/CreateAccount/">CreateAccount</Link> --
          <Link to="/login/">Login</Link> --
          <Link to="/deposit/">Deposit</Link> --
          <Link to="/withdraw/">Withdraw</Link> --
          <Link to="/balance/">Balance</Link> --
          <Link to="/alldata/">AllData</Link> --
          <hr/>
        </div>
      <UserContext.Provider value={{users:[{name:'Horowitz',email:'Horowitz@gmail.com',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact         component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/"         component={Login} />
          <Route path="/deposit/"       component={Deposit} />
          <Route path="/withdraw/"      component={Withdraw} />
          <Route path="/balance/"       component={Balance} />
          <Route path="/alldata/"       component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
