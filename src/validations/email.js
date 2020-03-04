const EMAIL_REGEX = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);
const ERROR_MSG = 'Invalid email address';

const validateEmail = (v) => (v.length > 0 && EMAIL_REGEX.test(v) ? '' : ERROR_MSG);

export default validateEmail;
