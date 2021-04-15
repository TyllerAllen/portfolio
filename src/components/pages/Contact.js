import { Row, Image } from 'react-bootstrap';
import { MotionContainer, MotionCol } from '../MotionComponents';
import linkedIn from '../../images/LinkedIn.png';
import github from '../../images/Github.png';
import email from '../../images/Email.png';
import { Link } from 'react-router-dom';

const imageVariants = {
    linkedIn: {
        x: '100vw',
        y: '100vh'
    },
    github: {
        x: '-100vw',
        y: '100vh'
    },
    email: {
        x: '100vw',
        y: '-100vh'
    },
    animate: {
        x: 0,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

const Contact = () => {
    return (
        <MotionContainer
            fluid
            className="page-container"
            animate="animate"
        >
            <Row>
                <MotionCol initial="github" variants={imageVariants} bsPrefix="contact-col">
                    <Link to={{ pathname: "https://github.com/TyllerAllen" }} target="_blank" >
                        <Image src={github} className="contact-img" />
                    </Link>
                </MotionCol>
                <MotionCol initial="email" variants={imageVariants} bsPrefix="contact-col">
                    <Link to={{ pathname: "mailto:tyllerallen@gmail.com" }} target="_blank" >
                        <Image src={email} className="contact-img" />
                    </Link>
                </MotionCol>
                <MotionCol initial="linkedIn" variants={imageVariants} bsPrefix="contact-col">
                    <Link to={{ pathname: "https://www.linkedin.com/in/tyllerallen/" }} target="_blank" >
                        <Image src={linkedIn} className="contact-img" />
                    </Link>
                </MotionCol>

            </Row>
        </MotionContainer>
    );
}

export default Contact;