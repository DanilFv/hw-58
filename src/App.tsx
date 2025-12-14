import './App.css';
import {useState} from 'react';
import Modal from './components/UI/Modal/Modal.tsx';
import type {IBtn} from './types';
import Alert from './components/UI/Alert/Alert.tsx';


const App = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const btnTypes: IBtn[] = [
        {type: 'primary', label: 'Continue', onClick: () => setShowModal(false)},
        {type: 'danger', label: 'Close', onClick: () => setShowModal(false)},
    ]

    const closeAlert: () => void = () => {
        setShowAlert(false);
    }

    return (
        <div className='d-flex'>
            <Modal
                show={showModal}
                title='Some kinda modal title'
                onClose={() => setShowModal(false)}
                buttons={btnTypes}
            >
                <p className='py-2 px-2 fs-5'>this is modal content</p>
            </Modal>

            {showAlert && (
                 <Alert
                    type='primary'
                    onDismiss={closeAlert}
                 >
                    This is a success type alert
                 </Alert>
            )}


            <div className='py-4 px-4'>
                <button
                    className='btn btn-primary'
                    type='button'
                    onClick={() => setShowModal(true)}
                >
                    Modal
                </button>
            </div>

               <div className='py-4 px-4'>
                <button
                    className='btn btn-primary'
                    type='button'
                    onClick={() => setShowAlert(true)}
                >
                    Alert
                </button>
            </div>
        </div>

    )
};

export default App
