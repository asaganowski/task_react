import React from 'react'
import PostsList from './PostsList'
import { useGetAllPostsQuery } from '../../services/getInfo'
import Loader from "../Loader/Loader"
import AddPost from './AddPost'


function Posts() {

    
    const {data:posts, isFetching} = useGetAllPostsQuery()
    //fetching posts
    
    if(isFetching) return <Loader />

    console.log(posts)


  return (
    <div className='posts-wrapper'>
        <div className='addPost-content'>
            <AddPost />
        </div>
        <div className='postsList-wrapper'>

            {posts?.data?.map((post)=>{
                return(
                    <PostsList key={post?.id} post={post}/>
                )

            })}
        </div>
    </div>
  )
}

export default Posts