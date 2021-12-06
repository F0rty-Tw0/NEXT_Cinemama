import { useState, useEffect, useCallback } from 'react';
import authenticateUser from './authenticateUser';
import { connect, useSelector } from 'react-redux';

const AuthenticationModal = ({ closeModal, authenticate }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useSelector((state) => state.user);

  const login = useCallback(
    async (event) => {
      event.preventDefault();
      authenticate({ email, password });
    },
    [email, password, authenticate]
  );

  useEffect(() => {
    if (user) {
      closeModal();
    }
  });
  return (
    <div>
      Backdrop
      <div>
        Modal Container
        <button onClick={() => closeModal()}>X</button>
        <div>
          <h1> Modal Title</h1>
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

export default connect((state) => state, { authenticate: authenticateUser })(
  AuthenticationModal
);
