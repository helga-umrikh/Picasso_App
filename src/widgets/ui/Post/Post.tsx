import React from 'react'
import Button from '../../../entities/ui/Button'
import { List, Typography } from 'antd'
import { PostProps } from '../../interfaces/PostProps'
const { Text, Title } = Typography

const Post: React.FC<PostProps> = ({ id, title, body }) => {
    return (
        <List.Item>
            <Text>{id}</Text>
            <Title level={5}>{title}</Title>
            <Text>
                {body.length > 20 ? body.substring(0, 50) + '...' : body}
            </Text>
            <Button route={`/post/${id}`} title={'Просмотр'} />
        </List.Item>
    )
}

export default Post
