const { body, validationResult } = require("express-validator");
const userValidationRules = [
  // username must be an email
  body("username").isEmail(),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(422).json({
    errors: errors.array(),
  });
};

module.exports = {
  userValidationRules,
  validate,
};
