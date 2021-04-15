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
                    link="https://github.com/TyllerAllen/portfolio"
                />
                <ProjectItem
                    title="Number Recognizer"
                    subtitle="2019"
                    desc="Developed an image processing application used to recognize numbers in images"
                    link="https://github.com/TyllerAllen/Image-Processing"
                />
                <ProjectItem
                    title="Map Spin"
                    subtitle="2019"
                    desc="Designed an Android application that selected a location for the user to visit based on the rendered map and user-defined fields"
                    link="https://github.com/TyllerAllen/MapSpin"
                />
                <ProjectItem
                    title="Shooter Game"
                    subtitle="2019"
                    desc="Developed a multi-client, geometric game where players shot and destroyed each other on a 2D battlefield"
                    link="https://github.com/TyllerAllen/Pew-Pew"
                />
                <ProjectItem
                    title="N x N Matrix Multiplication Table"
                    subtitle="2018"
                    desc="Parallelized C application built to determine the number of unique values in an N x N multiplication table"
                    link="https://github.com/TyllerAllen/CP431_FinalProject"
                />
            </Row>

        </MotionContainer>
    );
}

export default Projects;