import React from 'react'
import { Card, Space } from 'antd';

export const History: React.FC = () => {
  return (
    <div className="history-box">
      <Space direction="vertical" size={16}>
        <h1 style={ {color:"black"} }>Open Recent : </h1>
        <Card variant="borderless" style={{ width: '80vw' }}>
          <h1>Content 1</h1>
          <p>Something ......</p>
        </Card>

        <Card variant="borderless" style={{ width: '80vw' }}>
          <h1>Content 2</h1>
          <p>Something ...</p>
        </Card>

        <Card variant="borderless" style={{ width: '80vw' }}>
          <h1>Content 2</h1>
          <p>Something ...</p>
        </Card>

        <Card variant="borderless" style={{ width: '80vw' }}>
          <h1>Content 1</h1>
          <p>Something ......</p>
        </Card>

        <Card variant="borderless" style={{ width: '80vw' }}>
          <h1>Content 2</h1>
          <p>Something ...</p>
        </Card>

        <Card variant="borderless" style={{ width: '80vw' }}>
          <h1>Content 2</h1>
          <p>Something ...</p>
        </Card>
      </Space>
    </div>
  )
}
