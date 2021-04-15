import { Col, Card } from 'react-bootstrap';

const AboutItem = ({ img, title, desc }) => {
    return (
        <Col sm={12} md={6} lg={4} className="about-col">
            <Card text="white" bsPrefix="mx-auto about-card">
                <Card.Img variant="top" src={img} className="about-card-img" />
                <svg className="about-card-svg" viewBox="0 0 800 500">
                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#474747" />
                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="white" strokeWidth="6" fill="transparent" />
                </svg>
                <Card.Body className="about-card-body">
                    <Card.Title className="about-card-title">
                        {title}
                    </Card.Title>
                    <Card.Text className="about-card-text">
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AboutItem;