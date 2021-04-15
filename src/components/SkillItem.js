import { Col } from 'react-bootstrap';
import { MotionIcon, MotionRow } from './MotionComponents';

const rowVariants = {
    hover: {
        backgroundColor: '#666',
        transition: {
            staggerChildren: 0.1,
        }
    }
}

const starVariants = {
    hover: {
        y: -3,
        transition: {
            repeat: 1,
            repeatType: "reverse"
        }
    }
}

const SkillItem = ({ name, stars }) => {
    let starIcons = [];

    for (let i = 0; i < 5; i++) {
        if (i < stars)
            starIcons.push(<MotionIcon variants={starVariants} icon={['fas', 'star']} size="xs" key={i} />)
        else
            starIcons.push(<MotionIcon variants={starVariants} icon={['far', 'star']} size="xs" key={i} />)
    }

    return (
        <MotionRow
            className="align-items-center"
            variants={rowVariants}
            whileHover="hover"
        >
            <Col xs={8} className="pl-4">
                {name}
            </Col>
            <Col xs={"auto"} className="text-center">
                {starIcons}
            </Col>
        </MotionRow>
    );
}

export default SkillItem;