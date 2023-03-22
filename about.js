function About(){
    const ctx = React.useContext(UserContext);  

    return (
        <div>
            <h3>About Component</h3>
            <p>This is our story</p>
            {JSON.stringify(ctx.users)}
        </div>
    );
}