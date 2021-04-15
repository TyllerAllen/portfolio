import { pageVariants } from '../MotionVariants';
import { MotionContainer } from '../MotionComponents';

const NotFound = () => {
    return (
        <MotionContainer
            fluid
            className="page-container"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2 className="justify-content-center not-found-header">This page could not be found :(</h2>
        </MotionContainer>
    );
}

export default NotFound;