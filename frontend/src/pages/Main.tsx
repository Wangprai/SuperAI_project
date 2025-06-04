import React from 'react'
import { Menu } from '../components/Menu';
import { Flex, Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  height: 64,
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  color: '#fff',
  backgroundColor: '#0958d9',
};

const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  height: 64,
  backgroundColor: '#4096ff',
};

const layoutStyle: React.CSSProperties = {
  height: '100vh',
  width: '100vw',
};

export const Main: React.FC = () => {
  return (
    <Flex style={{ height: '100vh', width: '100vw' }}>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
            <Menu />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Flex>
  )
}
