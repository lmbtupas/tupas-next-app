import React from 'react'
import Post from '@/components/Post'

const Posts = ({ params }) => {
    console.log(params.id)
  return (
    <div>
        Posts {params.id}
    </div>
  )
}

export default Posts