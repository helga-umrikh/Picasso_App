import React from 'react'
import './Post.scss'
import Button from '../../../entities/ui/Button'
import { List } from 'antd'
import { PostProps } from '../../interfaces/PostProps'

const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <div className="post">
            <div>
                <div className="post__id">{post.id}</div>
                <List.Item.Meta
                    title={post.title}
                    description={
                        post.body.length > 20
                            ? post.body.substring(0, 50) + '...'
                            : post.body
                    }
                />
            </div>

            <Button route={`/post/${post.id}`} title={'Просмотр'} />
        </div>
    )
}

export default Post
