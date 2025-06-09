import React from 'react'
import { Card, Col } from 'antd';

export const OCRPreview: React.FC = () => {
    return (
        <div className="ocr-preview-box">
            <h1>OCR Preview :</h1>
            <Col xs={24} sm={24} md={12}>
                <Card variant='borderless' style={{ width: 600, display: "flex", flexDirection: "column", alignItems: "center", }}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus rerum, eligendi asperiores blanditiis cum ut mollitia. Porro, eveniet natus? Dolorum maiores recusandae officiis repellendus rerum. Quia iusto deserunt sint in!
                    Deserunt, excepturi ratione! Facere repellendus, doloremque necessitatibus cumque amet nobis similique error! Ullam illo architecto minus dignissimos tenetur quidem, porro iusto sapiente modi ducimus impedit, blanditiis, autem eaque fugit voluptatibus.
                    Expedita id perferendis maiores minus, eligendi fugiat totam, hic illo aut sint quas ex, laudantium harum repudiandae voluptates tempora quidem doloremque ea sapiente blanditiis fuga distinctio eos nulla? Totam, ratione!
                    Earum eaque unde, amet odit reprehenderit tempore tempora quo alias sit eum corrupti blanditiis mollitia maxime excepturi in neque deserunt sint, quaerat quam laborum architecto nesciunt. Quisquam commodi suscipit blanditiis.
                    Velit doloremque quasi nisi veniam optio obcaecati. Deserunt deleniti accusantium quam rem doloremque quae, placeat dolorum laudantium at corrupti nostrum similique assumenda officiis alias sapiente dolores, illo itaque laboriosam cupiditate.</p>
                </Card>
            </Col>
        </div>
    )
}
