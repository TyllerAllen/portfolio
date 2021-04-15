import { useState } from 'react';
import { MotionIcon } from './MotionComponents';
import { motion, AnimatePresence } from 'framer-motion';
import { Nav } from 'react-bootstrap';

const textVariants = {
    hidden: {
        width: 0,
        scaleX: 0,
    },
    visible: {
        width: 'auto',
        scaleX: 1,
    },
    hover: {
        scale: 0.8,
    }
}

const NavigationItem = ({ link, text, icon }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsVisible(true)}
            onHoverEnd={() => setIsVisible(false)}
            whileHover="hover"
        >
            <Nav.Item as="li">
                <Nav.Link href={link}>
                    <MotionIcon
                        icon={icon}
                        color={'white'}
                        variants={textVariants}
                    />

                    <AnimatePresence>
                        {isVisible && <motion.span className="navigation-text"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{
                                type: 'tween',
                                ease: 'easeInOut',
                                duration: 0.1
                            }}
                        >
                            {text}
                        </motion.span>}
                    </AnimatePresence>
                </Nav.Link>
            </Nav.Item>
        </motion.div>
    );
};

export default NavigationItem;