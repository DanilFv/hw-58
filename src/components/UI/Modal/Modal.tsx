import Backdrop from '../Backdrop/Backdrop.tsx';
import * as React from 'react';
import type {IBtn} from '../../../types';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title?: string;
  onClose?: () => void;
  buttons?: IBtn[]
}

const Modal: React.FC<Props> = ({ show = false, title = '', children, onClose, buttons = [] }) => {

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
            <div className="mx-2">
                {children}
            </div>

              {buttons.length > 0 && (
                  <div className='row justify-content-end mx-2 my-2'>
                      {buttons.map((button, index) => (
                          <button
                              type='button'
                              key={index}
                              className={`btn btn-${button.type} col-4 ms-2`}
                              onClick={button.onClick}
                          >
                              {button.label}
                          </button>
                      ))}
                  </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
