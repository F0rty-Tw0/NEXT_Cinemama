import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

const Error = ({ className }) => {
  const { isLoading } = useSelector((state) => state.loading);

  return (
    <Modal
      className={className}
      show={isLoading}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>LOADING</Modal.Body>
    </Modal>
  );
};
export default Error;
