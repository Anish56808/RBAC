import { Request, Response, NextFunction } from "express";
import { PermissionService } from "./permission.service";

export class PermissionController {
  static async createPermission(req: Request, res: Response, next: NextFunction) {
    try {
      const permission = await PermissionService.createPermission(req.body.key, req.body.description);
      res.success(permission, "Permission created successfully");
    } catch (err) {
      next(err);
    }
  }

  static async listPermissions(req: Request, res: Response, next: NextFunction) {
    try {
      const permissions = await PermissionService.listPermissions();
      res.success(permissions, "Permissions fetched successfully");
    } catch (err) {
      next(err);
    }
  }
}
