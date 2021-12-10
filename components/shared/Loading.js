import { useSelector } from 'react-redux';
import Image from 'next/image';
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
      <Image
        className='logo__image'
        src='/loader.svg'
        width='200'
        height='200'
        alt='Cinemama logo'
      />
    </Modal>
  );
};
export default Error;
