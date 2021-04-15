export const pageVariants = {
    initial: {
        opacity: 0,
        x: '100vw'
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.5
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        }
    }
}