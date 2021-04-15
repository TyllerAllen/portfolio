import { motion } from 'framer-motion';
import { Card, Col } from 'react-bootstrap';

const buttonVariants = {
    hover: {
        y: '.2rem',
        backgroundColor: '#888',
    }
}

const ProjectItem = ({ title, subtitle, desc }) => {
    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="project-card-wrapper">
                <div className="project-card-bg" />
                <Card text="black" bsPrefix="project-card">
                    <Card.Text bsPrefix="project-card-title">
                        {title}
                    </Card.Text>
                    <Card.Text bsPrefix="project-card-subtitle">
                        {subtitle}
                    </Card.Text>
                    <Card.Text bsPrefix="project-card-text">
                        {desc}
                    </Card.Text>
                </Card>
                <motion.button className="project-card-button"
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    Github
                </motion.button>
            </div>
        </Col>
    );
}

export default ProjectItem;