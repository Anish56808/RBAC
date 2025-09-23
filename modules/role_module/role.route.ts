import { Router } from "express";
import { RoleController } from "./role.controller";
import { validateRole } from "./role.validationChain";

const router = Router();

router.post("/", validateRole, RoleController.createRole);
router.get("/", RoleController.listRoles);
router.post("/assign-permissions", RoleController.assignPermissions);

export default router;
