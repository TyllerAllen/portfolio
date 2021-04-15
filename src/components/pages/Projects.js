import { Row } from 'react-bootstrap';
import { MotionContainer } from '../MotionComponents';
import { pageVariants } from '../MotionVariants';
import ProjectItem from '../ProjectItem';

const Projects = () => {
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
                <ProjectItem
                    title="React Portfolio"
                    subtitle="2021"
                    desc="Developed an interactive website to showcase my previous projects using ReactJS, Framer Motion, and React Bootstrap"
                />
                <ProjectItem
                    title="Number Recognizer"
                    subtitle="2019"
                    desc="Developed an image processing application used to recognize numbers in images"
                />
                <ProjectItem
                    title="Map Spin"
                    subtitle="2019"
                    desc="Designed an Android application that selected a location for the user to visit based on the rendered map and user-defined fields"
                />
                <ProjectItem
                    title="Map Spin"
                    subtitle="2019"
                    desc="Designed an Android application that selected a location for the user to visit based on the rendered map and user-defined fields"
                />
                <ProjectItem
                    title="Map Spin"
                    subtitle="2019"
                    desc="Designed an Android application that selected a location for the user to visit based on the rendered map and user-defined fields"
                />
                <ProjectItem
                    title="Map Spin"
                    subtitle="2019"
                    desc="Designed an Android application that selected a location for the user to visit based on the rendered map and user-defined fields"
                />
            </Row>

        </MotionContainer>
    );
}

export default Projects;