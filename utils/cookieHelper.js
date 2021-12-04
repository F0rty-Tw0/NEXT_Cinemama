import cookie from 'js-cookie';

const _getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

const _getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

const getCookie = (key, req) => {
  return process.browser
    ? _getCookieFromBrowser(key)
    : _getCookieFromServer(key, req);
};

const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/',
    });
  }
};

const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export { getCookie, setCookie, removeCookie };
