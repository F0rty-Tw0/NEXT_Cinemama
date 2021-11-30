const getAuthorization = async (url, credentials) => {
  const options = {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    credentials: 'same-origin',
    cache: 'no-cache',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };
  const authResponse = await fetch(url, options);
  const response = await authResponse.json();
  if (authResponse.status === 200) {
    return response;
  } else {
    throw new Error(response?.message);
  }
};
export default getAuthorization;
