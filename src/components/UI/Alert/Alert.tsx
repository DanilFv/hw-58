import * as React from 'react';

interface Props extends React.PropsWithChildren{
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {

    return (
        <div
            className='col justify-content-center align-items-center'
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

    );
};

export default Alert;