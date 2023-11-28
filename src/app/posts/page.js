"use client"
import React from 'react'
import Post from '@/components/Post'
import { useFetch } from 'usehooks-ts'

const Posts = () => {
  const results = useFetch('/api/posts/')
  console.log(results)

  if (results.error) {
    return (
      <div>
        {results.error.message}
      </div>
    )
  }


  return (
    <div>
        {results.data?.map(post =>(
          <Post key={post.id} title={post.title} author={post.author} body={post.body}/>
        ))}
    </div>
  )
}

export default Posts