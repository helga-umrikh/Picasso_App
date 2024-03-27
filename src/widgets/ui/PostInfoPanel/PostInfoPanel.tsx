import React from 'react'
import './PostInfoPanel.scss'
import { List, Avatar } from 'antd'
import { PostInfoPanelProps } from '../../interfaces/PostInfoPanelProps'
import { postAPI } from '../../../app/api/PostService'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import Button from '../../../entities/ui/Button'
import Loader from '../../../entities/ui/Loader/Loader'

const PostInfoPanel = ({ postId }: PostInfoPanelProps) => {
    const { data, isLoading, error } = postAPI.useFetchPostByIdQuery(postId)
    const PostItemSrc = [
        {
            href: 'https://ant.design',
            title: `ant design part`,
            avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=4`,
        },
    ]

    if (!data) {
        if (isLoading) {
            return <Loader />
        }

        if (error) {
            return <ErrorComponent error={error} />
        }
    }

    return (
        <>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={PostItemSrc}
                className="post-info-panel"
            >
                <List.Item
                    key={data && data.id}
                    className="post-nfo-panel__container"
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={PostItemSrc[0].avatar} />}
                        title={<p>{data && data.title}</p>}
                        description={data && data.body}
                        className="post-info-panel__meta"
                    />
                    <Button route="/" title="назад" />
                </List.Item>
            </List>
        </>
    )
}

export default PostInfoPanel
