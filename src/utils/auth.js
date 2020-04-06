import { getCookie } from './cookies';

export const getUserData = () => {
  try {
    const userToken = getCookie('app_token');
    return userToken && JSON.parse(localStorage.getItem('user_data'));
  } catch (e) {
    return null;
  }
};

export const setUserData = (data) => {
  localStorage.setItem('user_data', JSON.stringify(data));
};

export const clearUserData = () => {
  localStorage.removeItem('user_data');
};

export const isUserLoggedIn = () => {
  const userData = getUserData();
  const userToken = getCookie('app_token');
  return !!(userData && userToken);
};
