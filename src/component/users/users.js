import {useEffect, useState} from 'react'
import User from "../user/user";
import './users.css'
import axios from "../service/api";

export default function Users() {

    let [Users, setUsers] = useState([])
    let [UsersDetails, setUsersDetails] = useState(null)

    useEffect(() => {
        axios.get('/users')
            .then(value => setUsers([...value.data]))
    },[])
    const details = (id) => {
        let findUser = Users.find(value => value.id === id)
        setUsersDetails(findUser)
    }

    return <div className={'Father'}>
        <div className={'UsersBox'}>
            <h3>Users</h3>
            {
                Users.map(value => <User
                    key={value.id}
                    item={value}
                    details={details}/>)
            }
        </div>
        <div className={'UserDetails'}>
            {
                UsersDetails  ? (<h3>
                    name - {UsersDetails.name}
                    <br/>
                    email - {UsersDetails.email}
                    <br/>
                    city - {UsersDetails.address.city}

                </h3>): (<div>  </div>)
            }
        </div>
    </div>
}