import { useSelector } from 'react-redux';
const Error = ({ className }) => {
  const { isLoading } = useSelector((state) => state.loading);

  return isLoading ? <div className={className}>LOADING...</div> : null;
};
export default Error;
