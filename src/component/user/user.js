export default function User({item,details}) {
    return (
        <div>
            {item.id}-
            {item.username}
            <br/>
            <button onClick={()=>(details(item.id))}>details</button>
          </div>
    )
}