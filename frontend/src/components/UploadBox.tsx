import React from 'react'
import { Card, Col, Upload } from 'antd';

export const UploadBox: React.FC = () => {
  return (
    <div className="upload-box">
      <h1>Upload Document :</h1>
      <Col xs={24} sm={24} md={12}>
        <Upload>
          <Card variant='borderless' style={{ width: 600, display: "flex", flexDirection: "column", alignItems: "center", }}>
            <img src="../public/vite.svg" alt="" />
            <h1>Upload Document</h1>
            <p>Input file (.pdf or .jpg) from storage</p>
          </Card>
        </Upload>
      </Col>
    </div>
  )
}
