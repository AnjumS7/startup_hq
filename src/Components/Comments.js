import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Comments = (props) => {
    // console.log(props.postID)

    const [blogComments, setBlogComments] = useState([]);

    const CommentFetch = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
        const Data = res.data;
        // console.log(Data);
        setBlogComments(Data);
    }
    useEffect(CommentFetch,[]);

    const comments = blogComments.filter((comm) => {
        return comm.postId == props.postID;
    })

    // console.log(comments)


    return(
        comments.map((comm) => {
            return(
                <div>
                    <p class="text-black-600 font-bold">{comm.name}</p>
                    <p class="text-gray-900 leading-none">{comm.body}</p>
                    <p class="text-gray-600">C{comm.email}</p>
                    <br />
                    
                </div>

            )
        })
        

    )
}

export default Comments;