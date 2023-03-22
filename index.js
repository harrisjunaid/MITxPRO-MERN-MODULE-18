const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
// create context
const UserContext = React.createContext(null);

function Spa() {
  return (
    <HashRouter>
      <div>
          <h1>Routing - Hello World</h1>
          <Link to="/">Home</Link> -- 
          <Link to="/about/">About</Link> -- 
          <Link to="/products">Products</Link>
          <hr/>
          <UserContext.Provider value={{users:['peter']}}>
            <Route path="/" exact    component={Home}     />
            <Route path="/about/"    component={About}    />          
            <Route path="/products/" component={Products} />
          </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
