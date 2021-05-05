import {useEffect, useState} from 'react'
import axios from "../service/api";
import Post from "../post/post";
import './posts.css'


export default function Posts() {

    let [Posts, setPosts] = useState([])
    let [PostsDetails, setPostDetails] = useState(null)

    useEffect(() => {
        axios.get('/posts')
            .then(value => {
                setPosts([...value.data])
            })
    }, [])

    const details = (id) => {
        let findIdPOST = Posts.find(value => value.id === id)
        setPostDetails(findIdPOST)
    }

    return <div className={'PostFather'}>
        <div className={'PostsBox'}>
            {
                Posts.map((value, index) => <Post
                    key={index}
                    item={value}
                    details={details}


                />)
            }
        </div>
        <div className={'PostsDetails'}>
            {
                PostsDetails ? (<h3>
                    # -{PostsDetails.id}
                    <br/>
                    title: {PostsDetails.title}
                    <br/>
                    body: {PostsDetails.body}
                </h3>) : (<div> </div>)
            }
        </div>
    </div>
}