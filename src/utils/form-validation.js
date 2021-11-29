function validateEmail(email) {
  return (
    /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email) && email.length > 0
  );
}

function validateUsername(uname) {
  return uname.length > 4;
}

function validateSubmit(errors) {
  const isValid = Object.keys(errors).filter(
    (key) => errors[key].length > 0,
  ).length;
  return isValid;
}

function validatePassword(password) {
  return (
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    && password.length > 0
  );
}

export {
  validateEmail, validatePassword, validateSubmit, validateUsername,
};
