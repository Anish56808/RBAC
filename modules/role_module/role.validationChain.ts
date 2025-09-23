import { body } from "express-validator";

export const validateRole = [
  body("name").isString().withMessage("Role name is required")
];
