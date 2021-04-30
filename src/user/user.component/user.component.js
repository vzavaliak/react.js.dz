function User(props) {
    let{name , age , isMarried} = props;
    return <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h3>is married: {isMarried.toString()}</h3>
    </div>
}

export default User