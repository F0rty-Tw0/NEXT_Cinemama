const getAuthenticatedUserEmail = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.email;
};

export default getAuthenticatedUserEmail;
