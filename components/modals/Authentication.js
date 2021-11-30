import { useState } from 'react';
import { useRouter } from 'next/router';
import getUserAccessToken from '../../utils/hooks/getUserAccessToken';
const Authentication = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const submit = async (event) => {
    event.preventDefault();
    const token = await getUserAccessToken({ email, password });
    if (token) {
      router.push('/');
      closeModal();
    }
  };
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
          <form onSubmit={submit}>
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

export default Authentication;
