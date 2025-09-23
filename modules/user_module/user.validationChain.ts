import { body } from "express-validator";

export const createUserValidation = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("name").optional().isString().withMessage("Name must be a string"),
];

export const assignRoleValidation = [
  body("roleId").isUUID().withMessage("Role ID must be a valid UUID"),
];
