import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/actions';
const Error = ({ className }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.error);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(resetError());
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  return <div className={className}>{error}</div>;
};
export default Error;
