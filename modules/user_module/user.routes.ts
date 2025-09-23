import { Router } from "express";
import { UserController } from "./user.controller";
import { createUserValidation, assignRoleValidation } from "./user.validationChain";
import { validateRequest } from "../../middlewares/validateRequest.middleware";

const router = Router();

// Create a new user
router.post("/", createUserValidation, validateRequest, UserController.createUser);

// Assign role to user
router.post("/:userId/role", assignRoleValidation, validateRequest, UserController.assignRole);

// Add custom permission
router.post("/:userId/permissions", UserController.addCustomPermission);

// Remove custom permission
router.delete("/:userId/permissions", UserController.removeCustomPermission);

// Get user by ID
router.get("/:userId", UserController.getUser);

export default router;
