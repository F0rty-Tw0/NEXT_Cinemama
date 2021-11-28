const PageWrapper = ({ children, className, role }) => {
  return (
    <div role={role} className={`page-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
