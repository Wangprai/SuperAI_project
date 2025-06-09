import React from 'react'
import { Card, Row, Col } from 'antd';
import '../App.css'

export const Menu: React.FC = () => {
    return (
        <div className="menu-box">
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={24} md={12}>
                    <button>
                        <Card variant='borderless' style={{ width: 600, height: 400, display: "flex", flexDirection: "column", alignItems: "center", }}>
                            <img src="../public/vite.svg" alt="" />
                            <h1>Import Document</h1>
                            <p>Input file (.pdf or .jpg) from storage</p>
                        </Card>
                    </button>
                </Col>

                <Col xs={24} sm={24} md={12}>
                    <button>
                        <Card variant="borderless" style={{ width: 600, height: 400, display: "flex", flexDirection: "column", alignItems: "center", }}>
                            <img src="../public/vite.svg" alt="" />
                            <h1>Paste Text</h1>
                            <p>Paste your text</p>
                        </Card>
                    </button>
                </Col>
            </Row>
        </div>

    )
}
