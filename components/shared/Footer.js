const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className='footer__text'>
        &copy; Designed and developed by:{' '}
        <span className='footer__names'>
         Pawel Stepien
        </span>
      </div>
    </footer>
  );
};
export default Footer;
