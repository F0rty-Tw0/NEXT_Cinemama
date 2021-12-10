import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/actions';
import Modal from 'react-bootstrap/Modal';

const Error = ({ className }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.error);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(resetError());
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  const handleClose = () => dispatch(resetError());

  return (
    <Modal className={className} show={!!error} onHide={handleClose}>
      <Modal.Header className='error__message' closeButton>
        <Modal.Title className='text-uppercase'>{error}</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};
export default Error;
