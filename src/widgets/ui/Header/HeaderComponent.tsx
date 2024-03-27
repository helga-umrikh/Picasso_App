import React from 'react'
import './HeaderComponent.scss'
import { Layout, Typography } from 'antd'
const { Header } = Layout
const { Title } = Typography

const HeaderComponent = () => {
    return (
        <Header className="header">
            <Title level={1} className="header__title">
                Picasso App
            </Title>
        </Header>
    )
}

export default HeaderComponent
