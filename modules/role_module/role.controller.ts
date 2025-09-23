import { Request, Response, NextFunction } from "express";
import { RoleService } from "./role.services";

export class RoleController {
  static async createRole(req: Request, res: Response, next: NextFunction) {
    try {
      const role = await RoleService.createRole(req.body.name);
      res.success(role, "Role created successfully");
    } catch (err) {
      next(err);
    }
  }

  static async listRoles(req: Request, res: Response, next: NextFunction) {
    try {
      const roles = await RoleService.listRoles();
      res.success(roles, "Roles fetched successfully");
    } catch (err) {
      next(err);
    }
  }

  static async assignPermissions(req: Request, res: Response, next: NextFunction) {
    try {
      const { roleId, permissionIds } = req.body;
      const role = await RoleService.assignPermissions(roleId, permissionIds);
      res.success(role, "Permissions assigned successfully");
    } catch (err) {
      next(err);
    }
  }
}
