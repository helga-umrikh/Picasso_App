import React from 'react';
import "./PostPage.scss";
import { useParams } from 'react-router-dom'
import PostInfoPanel from '../../widgets/ui/PostInfoPanel/PostInfoPanel'

const PostPage = () => {
    const { id } = useParams<{ id?: string }>()
    return <div className='post-page'>
        {id && <PostInfoPanel postId={parseInt(id)} />}
    </div>
}

export default PostPage
