import Link from 'next/link';
import BaseLayout from 'layouts/BaseLayout';
import Button from 'react-bootstrap/Button';
const ErrorPage = () => {
  return (
    <BaseLayout
      title='Error has occurred'
      description='TPage not found'
      className='base-layout__error'
    >
      <div className='content--center mt-5'>
        <h1>404: Page not found.</h1>
        <Button className='custom__button link text-uppercase'>
          <Link scroll={false} href='/'>
            Back
          </Link>
        </Button>
      </div>
    </BaseLayout>
  );
};
export default ErrorPage;
