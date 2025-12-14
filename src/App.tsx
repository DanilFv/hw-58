import './App.css';
import {useState} from 'react';
import Modal from './components/UI/Modal/Modal.tsx';


const App = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <Modal
                show={showModal}
                title='Some kinda modal title'
                onClose={() => setShowModal(false)}
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
