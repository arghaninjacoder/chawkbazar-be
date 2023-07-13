const { body } = require("express-validator");

module.exports.registerValidations = [
  body("name").not().isEmpty().trim().escape().withMessage("name is required"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .trim()
    .escape()
    .withMessage("email is required"),
  body("password")
    .isLength({ min: 5 })
    .trim()
    .withMessage("password must be at least 5 characters long"),
];
