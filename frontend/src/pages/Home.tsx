import React from 'react'
import '../index.css'

import { Flex, Layout } from 'antd';
import { UploadBox } from '../components/UploadBox';
import { OCRPreview } from '../components/OCRPreview';
import { TextEdit } from '../components/TextEdit';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
  height: 64,
  backgroundColor: '#4096ff',
};

const contentRightStyle: React.CSSProperties = {
  display: 'block',
  justifyContent: 'center',
  padding: 25,
  color: 'black',
  overflow: 'hidden',
  height: '100vh',
};

const contentLeftStyle: React.CSSProperties = {
  display: 'block',
  justifyContent: 'center',
  padding: 25,
  color: 'black',
  overflow: 'hidden',
  height: '100vh',
};

// const content2Style: React.CSSProperties = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   color: '#fff',
//   // backgroundColor: '#00faf6',
//   overflow: 'hidden',
//   height: 'auto',
//   padding: 20,
// };

const layoutStyle: React.CSSProperties = {
  height: 'auto',
  width: '100vw',
  display: 'block',
};

export const Home: React.FC = () => {
  return (
    <Flex style={{ width: '100vw' }}>
      <Layout style={layoutStyle}>
        <div className="header">
          <Header style={headerStyle}>
            <h3>Voice Communication</h3>
          </Header>
        </div>
        <div className="container">
            <Content style={contentRightStyle}>
              <UploadBox />
              <OCRPreview />
            </Content>
            <Content style={contentLeftStyle}>
              <TextEdit />
            </Content>
        </div>
      </Layout>
    </Flex>
  )
}
