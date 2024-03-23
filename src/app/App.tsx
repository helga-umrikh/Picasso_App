import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PostPage from '../pages/PostPage/PostPage'
import {  Layout, Flex  } from 'antd';
import HeaderComponent from '../widgets/ui/Header/HeaderComponent';

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
};

function App() {
    return (
        <div className="App">
            <Flex gap="middle" wrap="wrap">
                <Layout style={layoutStyle}>
                  <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/post/:id" element={<PostPage />} />
                    </Routes>
                </Layout>
            </Flex>
        </div>
    )
}

export default App
