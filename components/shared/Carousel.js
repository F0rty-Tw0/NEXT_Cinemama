import Image from 'next/image';
const Carousel = ({ className }) => {
  return (
    <Image
      className={className}
      src='/carousel.webp'
      width='1300'
      height='400'
      alt='Cinemama logo'
    />
  );
};
export default Carousel;
