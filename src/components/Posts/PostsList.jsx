import React,{useState} from 'react'
import "./PostsList.scss"
import { useGetUserQuery, useGetCommentsByPostIdQuery } from '../../services/getInfo'
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc'
import { Button } from 'react-bootstrap'
import { BsPersonCircle } from "react-icons/bs";




function PostsList({post}) {

    
    const [showComments, setShowComments] = useState(false)

    const {data: user} = useGetUserQuery(post?.user_id)
    //fetching author of the post

    const {data: comments} = useGetCommentsByPostIdQuery(post?.id)
    //fetching comments for each post 

    

    console.log(comments)
  return (
        <div className='postsList-content'>
            {user?.data?.name!==undefined &&
                <div className='user-details'>
                    <div className='user-photo'>
                        {user?.data?.gender === "female" ? <FcBusinesswoman/> : <FcBusinessman/>}
                    </div>
                    <div className='user-info'>
                        <h4 className='user-name'>{user?.data?.name}</h4>
                        <small className='user-mail'>{user?.data?.email}</small>
                    </div>
                    
                </div>
            }
            <div className='post-details'>
                <p className='title'>{post?.title}</p>
                <p >{post?.body}</p>
            </div>

            
            {comments?.data.length>0 && 
                    <div className='showComment-btn'>
                        <Button variant="link" onClick={()=>setShowComments(!showComments)}>{comments?.data.length} comments</Button>
                    </div>
            }      
            

            {showComments &&
                <div className='comments-content'>
                    
                    {comments?.data.map((comment, index) => {
                        return(
                            <div className='comment-details' key={index}>
                                <div className='comment-photo'>
                                    <BsPersonCircle /> 
                                </div>
                                <div className='comment-info'>
                                    <h6 className='comment-author'>{comment.name}:</h6>
                                    <small className='comment-body'>{comment.body}</small>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }

        </div>
  )
}

export default PostsList