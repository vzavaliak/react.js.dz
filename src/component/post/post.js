export default function Post({item,details}){
    return (
        <div>
            User ID: {item.userId} -
           <button onClick={()=>(details(item.id))}>details</button>
    </div>
    )
}