import { Router } from "express";
import { PermissionController } from "./permission.controller";
import { validatePermission } from "./permission.validationChain";
const router = Router();

router.post("/", validatePermission, PermissionController.createPermission);
router.get("/", PermissionController.listPermissions);

export default router;
