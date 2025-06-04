import React from 'react'
import { Card, Space } from 'antd';

export const Menu: React.FC = () => {
    return (
        <Space size={16}>
            <Card variant="borderless" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>

            <Card variant="borderless" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Space>
    )
}
