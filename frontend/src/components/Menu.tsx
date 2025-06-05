import React from 'react'
import { Card, Space } from 'antd';
import '../App.css'

export const Menu: React.FC = () => {
    return (
        <div className="menu-box">
            <Space size={16}>
                <Card variant="borderless" style={{ width: 600, display: "flex", justifyContent: "center", }}>
                    <img src="../public/vite.svg" alt="" />
                    <h1>Paste Text</h1>
                    <p>Input or paste your text</p>
                </Card>

                <Card variant="borderless" style={{ width: 600, display: "flex", justifyContent: "center" }}>
                    <img src="../public/vite.svg" alt="" />
                    <h1>Import Document</h1>
                    <p>Use file (.pdf or .jpg) from storage</p>
                </Card>
            </Space>
        </div>
    )
}
