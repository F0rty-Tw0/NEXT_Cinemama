import { useState, useCallback } from 'react';
import authorizeUser from './authorizeUser';

const AuthenticationModal = ({ closeModal, setAuthorizedUser }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const login = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await authorizeUser({ email, password });
        setAuthorizedUser(email);
        closeModal();
      } catch (err) {
        setError(err.message);
      }
    },
    [closeModal, email, password, setAuthorizedUser]
  );

  return (
    <div>
      Backdrop
      <div>
        Modal Container
        <button onClick={() => closeModal()}>X</button>
        <div>
          <h1> Modal Title</h1>
          <h2>{error}</h2>
        </div>
        <div>
          <form onSubmit={login}>
            <label>email</label>
            <br />
            <input
              type='email'
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <label>password</label>
            <br />
            <input
              type='password'
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button>Login</button>
          </form>
        </div>
        <div>
          Modal footer
          <button onClick={() => closeModal()}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationModal;
