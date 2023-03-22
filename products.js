function Products(){
    const ctx = React.useContext(UserContext);  
    ctx.users.push(Math.random().toString(36).substr(2, 5));

    return (
        <div>
            <h3>Products Component</h3>
            <p>List of the the product we make</p>
            {JSON.stringify(ctx.users)}
        </div>
    );
}