import { body } from "express-validator";

export const validatePermission = [
  body("key").isString().withMessage("Permission key is required"),
  body("description").optional().isString()
];
