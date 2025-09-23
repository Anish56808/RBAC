import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.services";
import { ApiResponse } from "../../utils/apiResponse";

export class UserController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.createUser(req.body);
      return ApiResponse.success(res, user, "User created successfully");
    } catch (err) {
      next(err);
    }
  }

  static async assignRole(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const { roleId } = req.body;
      const user = await UserService.assignRole(userId, roleId);
      return ApiResponse.success(res, user, "Role assigned successfully");
    } catch (err) {
      next(err);
    }
  }

  static async addCustomPermission(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const { permissionId } = req.body;
      const user = await UserService.addCustomPermission(userId, permissionId);
      return ApiResponse.success(res, user, "Custom permission added");
    } catch (err) {
      next(err);
    }
  }

  static async removeCustomPermission(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const { permissionId } = req.body;
      const user = await UserService.removeCustomPermission(userId, permissionId);
      return ApiResponse.success(res, user, "Custom permission removed");
    } catch (err) {
      next(err);
    }
  }

  static async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const user = await UserService.getUserById(userId);
      if (!user) return ApiResponse.notFound(res, "User not found");
      return ApiResponse.success(res, user);
    } catch (err) {
      next(err);
    }
  }
}
