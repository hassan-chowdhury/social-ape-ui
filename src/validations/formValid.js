const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    if (val.length > 0) {
      valid = false;
    }
  });

  return valid;
};

export default formValid;
