import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Image } from 'react-bootstrap';

export const MotionIcon = motion(React.forwardRef(({ icon, color, size }, ref) => <FontAwesomeIcon icon={icon} color={color} size={size} forwardedRef={ref} />));

export const MotionContainer = motion(Container);
export const MotionRow = motion(Row);
export const MotionCol = motion(Col);
export const MotionImage = motion(Image);