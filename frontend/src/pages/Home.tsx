import React from 'react'
import { Menu } from '../components/Menu';
import { History } from '../components/History';

import '../index.css'

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

const content1Style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 25,
  color: '#fff',
  // backgroundColor: '#0958d9',
  overflow: 'hidden',
  height: '25%'
};

const content2Style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  // backgroundColor: '#00faf6',
  overflow: 'hidden',
  height: 'auto',
  padding: 20,
};

const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  height: '64',
  backgroundColor: '#4096ff',
};

const layoutStyle: React.CSSProperties = {
  height: 'auto',
  width: '100vw',
  display: 'block',
};

export const Home: React.FC = () => {
  return (
    <Flex style={{ width: '100vw' }}>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>

        <div className="container" style={ { height:'scroll' } }>
          <Content style={content1Style}>
            <Menu />
          </Content>
          <Content style={content2Style}>
            <History />
          </Content>
        </div>

        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Flex>
  )
}
