import { body } from "express-validator";

export const validatePost = [
  body("title").isString().withMessage("Title is required"),
  body("content").isString().withMessage("Content is required")
];
