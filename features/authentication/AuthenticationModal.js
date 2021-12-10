import { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import authenticateUser from './authenticateUser';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AuthenticationModal = ({ isOpen, handleClose, authenticate }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const login = useCallback(
    async (event) => {
      event.preventDefault();
      const isLogged = await authenticate({ email, password });
      if (isLogged) {
        handleClose();
      }
    },
    [email, password, authenticate, handleClose]
  );

  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      size='m'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Please enter your credentials
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={login}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className='text-muted'>
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit' className='float-sm-end custom__button'>
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default connect((state) => state, { authenticate: authenticateUser })(
  AuthenticationModal
);
