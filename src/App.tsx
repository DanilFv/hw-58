import './App.css';
import {useState} from 'react';
import Modal from './components/UI/Modal/Modal.tsx';
import type {IBtn} from './types';


const App = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const btnTypes: IBtn[] = [
        {type: 'primary', label: 'Continue', onClick: () => setShowModal(false)},
        {type: 'danger', label: 'Close', onClick: () => setShowModal(false)},
    ]

    return (
        <>
            <Modal
                show={showModal}
                title='Some kinda modal title'
                onClose={() => setShowModal(false)}
                buttons={btnTypes}
            >
                <p className='py-2 px-2 fs-5'>this is modal content</p>
            </Modal>

            <div className='py-4 px-4'>
                <button
                    className='btn btn-primary'
                    type='button'
                    onClick={() => setShowModal(true)}
                >
                    Modal
                </button>
            </div>
        </>

    )
};

export default App
