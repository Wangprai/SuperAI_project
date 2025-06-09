import React from 'react';
import { Button, Input, Col } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export const TextEdit: React.FC = () => {
    return (
        <div className='text-edit-box'>
            <h1>Summary Document :</h1>
            <Col xs={24} sm={24} md={12}>
                <TextArea
                    rows={4}
                    placeholder="พิมพ์ข้อความที่นี่..."
                    style={{ width: 600, marginBottom: 16 }}
                />
                <Button type="primary" icon={<AudioOutlined />} block>
                    สร้างเสียง
                </Button>
            </Col>
        </div>
    )
}
