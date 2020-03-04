const ERROR_MSG = 'minimum 6 characters required';

const validatePassword = (v) => (v.length > 0 && v.length < 6 ? ERROR_MSG : '');

export default validatePassword;
