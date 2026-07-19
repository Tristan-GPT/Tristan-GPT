import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function PageTransition({ children }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 35,
                filter: 'blur(8px)',
            }}
            animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
            }}
            exit={{
                opacity: 0,
                y: -20,
                filter: 'blur(8px)',
            }}
            transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
