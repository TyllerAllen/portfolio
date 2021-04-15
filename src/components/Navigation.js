import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationItem from './NavigationItem';

const Navigation = () => {
    return (
        <Navbar expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Toggle type="button" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
                    <FontAwesomeIcon icon={['fas', 'bars']} color="white" />
                </Navbar.Toggle>
                <Navbar.Brand>
                    <NavigationItem link="/" text="Home" icon={['fas', 'home']} />
                </Navbar.Brand>

                <Navbar.Collapse>
                    <Nav className="ml-auto" as="ul">

                        <NavigationItem link="/resume" text="Resume" icon={['fas', 'graduation-cap']} />
                        <NavigationItem link="/projects" text="Projects" icon={['fas', 'lightbulb']} />
                        <NavigationItem link="/about" text="About" icon={['fas', 'info-circle']} />
                        <NavigationItem link="/contact" text="Contact" icon={['fas', 'user-circle']} />

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;