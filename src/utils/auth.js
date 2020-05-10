import { getCookie } from './cookies';

const getUserData = () => {
  try {
    const userToken = getCookie('app_token');
    return userToken && JSON.parse(localStorage.getItem('user_data'));
  } catch (e) {
    return null;
  }
};

const setUserData = (data) => {
  if (data) {
    localStorage.setItem('user_data', JSON.stringify(data));
  }
};

const clearUserData = () => {
  localStorage.removeItem('user_data');
};

const isUserLoggedIn = () => {
  const userData = getUserData();
  const userToken = getCookie('app_token');
  return !!(userData && userToken);
};

export { getUserData, setUserData, clearUserData, isUserLoggedIn };
