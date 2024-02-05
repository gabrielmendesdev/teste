import * as React from 'react';
import Modal from '@mui/material/Modal';
import { CircularProgress } from '@mui/material';

interface LoadingModalProps {
    open: boolean
}

const LoadingModal: React.FC<LoadingModalProps> = ({ open }) => {
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='d-flex align-items-center justify-content-center'
            >
                <CircularProgress color='secondary' />
            </Modal>
        </div>
    );
}

export default LoadingModal