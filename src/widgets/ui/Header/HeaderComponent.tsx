import React from 'react'
import { Layout } from 'antd'
const { Header } = Layout

const headerStyle = {
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const HeaderComponent = () => {
    return <Header style={headerStyle}>Picasso App</Header>
}

export default HeaderComponent
