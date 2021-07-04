import common from './common';
import auth from './auth';
import cookies from './cookies';
import hooks from './hooks';
import image from './image';
import form from './form';

export default { ...common, ...auth, ...cookies, ...hooks, ...image, ...form };
