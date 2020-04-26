/* eslint-disable no-useless-escape */

/**
 * minLength Val
 * @param  value
 * @param  minLength
 * @return boolean
 */
const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
};

/**
 * maxLength Val
 * @param  value
 * @param  maxLength
 * @return boolean
 */
const maxLengthValidator = (value, maxLength) => {
  return value.length <= maxLength;
};

/**
 * email Val
 * @param  value
 * @param  isEmail
 * @return boolean
 */
const isEmailValidator = (value) => {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
  return !value || !pattern.test(value);
};

const useValidator = (value, rules) => {
  let isValid = true;
  for (let i = 0; i < rules.length; i += 1) {
    const rule = rules[i];
    switch (rule) {
      case 'minLength': {
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;
      }
      case 'isRequired': {
        isValid = !!(isValid && value);
        break;
      }
      case 'maxLength': {
        isValid = isValid && maxLengthValidator(value, rules[rule]);
        break;
      }
      case 'isEmail': {
        isValid = isValid && isEmailValidator(value, rules[rule]);
        break;
      }
      default:
    }
  }

  return [isValid];
};

export default useValidator;
