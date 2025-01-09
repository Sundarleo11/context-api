
import React ,{useEffect,useState}from "react";

import { getposts } from '../service/postService'; // Named import


export default function Posts(){

     const [Post,setPost]=useState([]);

    useEffect(()=>{
        getposts().then((res)=>{
           setPost(res.data)
        })
        .catch((err)=>{
            console.error(err);
        });
    },[])


     return(<div>
        <h1>Posts</h1>
        <ul>
            {
                Post.map((post)=>(
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))
            }
        </ul>
     </div>);
}