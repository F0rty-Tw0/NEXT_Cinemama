import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';

const Error = ({ className }) => {
  const { isLoading } = useSelector((state) => state.loading);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <Modal
      className={className}
      show={isLoading || loading}
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
