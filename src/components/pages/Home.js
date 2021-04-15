import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import avatar from '../../images/TylerAllen.jpg';
import { MotionContainer, MotionImage } from '../MotionComponents';
import { pageVariants } from '../MotionVariants';

const imageVariants = {
    initial: {
        x: '100vw'
    },
    animate: {
        x: 0,
        rotate: -720,
        transition: {
            type: 'spring',
            delay: 1,
            duration: 3
        }
    }
}

const buttonVariants = {
    hover: {
        y: '.2rem',
        backgroundColor: '#888',
    }
}

const Home = () => {
    return (
        <MotionContainer fluid
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-container"
        >
            <div className="home-card-wrapper">
                <div className="home-card-bg" />
                <MotionImage
                    variants={imageVariants}
                    src={avatar}
                    alt="Avatar"
                    className="avatar-img"
                    roundedCircle
                />
                <Card text="black" bsPrefix="home-card">
                    <Card.Text bsPrefix="home-card-title">
                        Tyler Allen
                    </Card.Text>
                    <Card.Text bsPrefix="home-card-subtitle">
                        Full Stack Developer
                    </Card.Text>
                    <Card.Text bsPrefix="home-card-text">
                        Welcome to my portfolio! I created this website to practice my understanding of React, Framer Motion, and Bootstrap. Play around and see what you can find!
                    </Card.Text>
                </Card>
                <Link to="/contact">
                    <motion.button className="home-card-button"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        Contact
                </motion.button>
                </Link>
            </div>
        </MotionContainer>
    );
}

export default Home;