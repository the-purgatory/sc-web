/* eslint-disable no-useless-escape */

/**
 * minLength Val
 * @param  value
 * @param  minLength
 * @return
 */
const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
};

/**
 * maxLength Val
 * @param  value
 * @param  maxLength
 * @return
 */
const maxLengthValidator = (value, maxLength) => {
  return value.length <= maxLength;
};

/**
 * email Val
 * @param  value
 * @param  isEmail
 * @return
 */
const isEmailValidator = (value, isEmail) => {
  const patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
  if (isEmail) {
    return value && patt.test(value);
  }
  // why would I want to check if it's not a valid email??????? WTF????/
  return !value || !patt.test(value);
};

const Validator = (value, rules) => {
  const rulesKeys = Object.keys(rules);
  let isValid = true;

  let i = 0;
  while (isValid && rulesKeys[i]) {
    const rule = rulesKeys[i];
    const ruleValue = rules[rule];
    switch (rule) {
      case 'minLength': {
        isValid = isValid && minLengthValidator(value, ruleValue);
        break;
      }
      case 'isRequired': {
        isValid = !!(isValid && value);
        break;
      }
      case 'maxLength': {
        isValid = isValid && maxLengthValidator(value, ruleValue);
        break;
      }
      case 'isEmail': {
        isValid = isValid && isEmailValidator(value, ruleValue);
        break;
      }
      default:
    }
    i += 1;
  }
  return isValid;
};

export default Validator;
