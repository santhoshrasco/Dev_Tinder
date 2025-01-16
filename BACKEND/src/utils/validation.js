const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailID, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("First name and last name are required");
  } else if (!validator.isEmail(emailID)) {
    throw new Error("Invalid email");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("PLEASE ENTER STRONG PASSWORD");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "photoUrl",
    "gender",
    "about",
    "skills",
    "age"
  ];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes((field))
  );
  return isEditAllowed;
};
const validationLoginData = (req) => {
  const { emailID, password } = req.body;
  if (!emailID || !password) {
    throw new Error("Email or password does not match");
  }
};

module.exports = { validateSignUpData, validationLoginData, validateEditProfileData };
