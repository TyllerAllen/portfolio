import { Card, Container, Row, Col, Image } from 'react-bootstrap';

const ResumeItem = ({ startYear, endYear, img, title, subtitle, desc }) => {

    return (
        <Card border="light" className="resume-card-item">
            <Container fluid>
                <Row className="resume-card-row">
                    <Col xs={12} sm={6} md={3} className="text-center">
                        <Image className="resume-card-image" src={img} roundedCircle />
                    </Col>
                    <Col xs={12} sm={6} md={3} className="text-center">
                        <Card.Title>{startYear}{endYear ? " - " + endYear : ""}</Card.Title>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle>{subtitle}</Card.Subtitle>
                        <Card.Text className="mt-2">{desc}</Card.Text>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default ResumeItem;