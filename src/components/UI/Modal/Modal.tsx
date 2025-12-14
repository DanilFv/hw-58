import Backdrop from '../Backdrop/Backdrop.tsx';
import * as React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title?: string;
  onClose?: () => void;
}

const Modal: React.FC<Props> = ({ show = false, title = '', children, onClose }) => {

  return (
    <>
      <Backdrop show={show} onClose={onClose} />
      <div
        className="modal show"
        style={{
          display: show ? 'block' : 'none',
          width: '500px',
          height: '300px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4 text-center">{title}</h1>
                <button className='btn btn-close' type='button' onClick={onClose}></button>
            </div>
            <div className="mx-2">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
