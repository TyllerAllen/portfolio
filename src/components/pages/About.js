import { Row } from 'react-bootstrap';
import { MotionContainer } from '../MotionComponents';
import { pageVariants } from '../MotionVariants';
import hobby from '../../images/Longboard.jpg';
import grad from '../../images/Grad.jpg';
import portfolio from '../../images/Portfolio.jpg';
import AboutItem from '../AboutItem';

const AboutMe = () => {
    return (
        <MotionContainer
            fluid
            className="page-container"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Row>
                <AboutItem
                    img={grad}
                    title="Career"
                    desc="My goal for the future is to understand the majority of industry leading technologies, and to know which combination of them to use for any given task. It is never too late to learn something new, especially when there are so many impactful technologies emerging everyday."
                />
                <AboutItem
                    img={hobby}
                    title="Hobbies"
                    desc="When I am not working on projects, I like to ride around on my longboard/snowboard and complete custom cross-stitch patterns. I enjoy creating my own designs in a voxel-art program called MagicaVoxel, which I also plan to use in the future to build videogame assets. Aside from these, I have recently broken into the world of boardgames; with my most recent addition being Brass: Birmingham."
                />
                <AboutItem
                    img={portfolio}
                    title="My Portfolio"
                    desc="I will continue to update this website as I learn more about web development. I am very interested in following industry standards and best practices when it comes to code implementation. If you happen to notice any redundancies or sections I can improve on, please contact me directly or through the github repository."
                />
            </Row>
        </MotionContainer>
    );
}

export default AboutMe;