import ResumeItem from '../ResumeItem'
import { Card, Collapse, Container, Row, Col } from 'react-bootstrap';
import { MotionContainer } from '../MotionComponents';
import { useState } from 'react';
import { pageVariants } from '../MotionVariants';
import viaesys from '../../images/Viaesys.jpg';
import wlu from '../../images/WLU.jpg';
import phi from '../../images/PhiSoc.jpg';
import SkillItem from '../SkillItem';

const EDUCATION = 0;
const EXPERIENCE = 1;
const VOLUNTEER = 2;
const SKILLS = 3;

const Resume = () => {
    const [openTabs, setOpenTabs] = useState([true, true, true, true]);

    const toggleOpen = (index) => {
        let newTabs = openTabs;
        newTabs[index] = !newTabs[index];
        setOpenTabs([...newTabs]);
    }

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
                <Col lg={12} xl={4}>
                    <Card text="white" className="resume-card">
                        <Card.Header className="resume-card-header" onClick={() => toggleOpen(SKILLS)}>Skills</Card.Header>
                        <Collapse in={openTabs[SKILLS]}>
                            <div>
                                <Card border="light" className="resume-card-item">
                                    <Container fluid className="py-3">
                                        <SkillItem name="ReactJS" stars={5} />
                                        <SkillItem name="Java" stars={4} />
                                        <SkillItem name="Python" stars={3} />
                                        <SkillItem name="C#" stars={3} />
                                        <SkillItem name="Bootstrap Framework" stars={3} />
                                        <SkillItem name="C" stars={2} />
                                    </Container>
                                </Card>
                            </div>
                        </Collapse>
                    </Card>
                </Col>
                <Col lg={12} xl={8}>
                    <Card text="white" className="resume-card">
                        <Card.Header className="resume-card-header" onClick={() => toggleOpen(EDUCATION)}>Education</Card.Header>
                        <Collapse in={openTabs[EDUCATION]}>
                            <div>
                                <ResumeItem
                                    startYear="2015"
                                    endYear="2019"
                                    img={wlu}
                                    title="Bachelor of Science"
                                    subtitle="Honours Computer Science"
                                    desc="Graduated July, 2020"
                                />
                            </div>
                        </Collapse>
                    </Card>
                    <Card text="white" className="resume-card">
                        <Card.Header className="resume-card-header" onClick={() => toggleOpen(EXPERIENCE)}>Latest Experience</Card.Header>
                        <Collapse in={openTabs[EXPERIENCE]}>
                            <div>
                                <ResumeItem
                                    startYear="2020"
                                    endYear="2021"
                                    img={viaesys}
                                    title="Viaesys Inc."
                                    subtitle="Quality Assurance Tester"
                                    desc="Assembled and tested more than 200 camera and GPS systems to be used by road patrol companies."
                                />
                            </div>
                        </Collapse>
                    </Card>
                    <Card bg="dark" text="white" className="resume-card mb-5">
                        <Card.Header className="resume-card-header" onClick={() => toggleOpen(VOLUNTEER)}>Volunteer</Card.Header>
                        <Collapse in={openTabs[VOLUNTEER]}>
                            <div>
                                <ResumeItem
                                    startYear="2018"
                                    endYear="2019"
                                    img={phi}
                                    title="WLU PHI Club"
                                    subtitle="Co-curricular Executive"
                                    desc="Coordinated and hosted study sessions, coding competitions, developer workshops, and other club related events."
                                />
                            </div>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
        </MotionContainer>
    );
}

export default Resume;