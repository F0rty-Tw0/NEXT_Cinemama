import Image from 'next/image';

const PosterImage = ({ src, className, alt, height, width }) => {
  return (
    <Image
      width={width}
      height={height}
      alt={alt}
      className={className}
      src={src}
    />
  );
};
export default PosterImage;
