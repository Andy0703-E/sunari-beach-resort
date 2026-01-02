import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
};

export default SectionWrapper;
