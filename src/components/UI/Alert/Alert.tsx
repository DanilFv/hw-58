import * as React from 'react';
import type {Variants} from 'framer-motion';
import {AnimatePresence, motion} from 'framer-motion';

interface Props extends React.PropsWithChildren{
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void;
    show: boolean;
}

const alertVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -24,
        scale: 0.96,
        filter: 'blur(4px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        },
    },
    exit: {
        opacity: 0,
        y: -16,
        scale: 0.97,
        filter: 'blur(4px)',
        transition: {
        duration: 0.2,
        ease: 'easeIn',
        },
    },
};

const Alert: React.FC<Props> = ({type, onDismiss, children, show}) => {

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key='alert'
                    variants={alertVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                    className="position-absolute top-50 start-50 translate-middle"
                >
                    <div className='col justify-content-center align-items-center'
                        style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                        <div className={`alert alert-${type} d-flex justify-content-between align-items-center`} style={{ width: '600px' }}>
                            {children}

                            {onDismiss && (
                            <button
                                    type='button'
                                    className='btn-close'
                                    onClick={onDismiss}
                                >
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Alert;