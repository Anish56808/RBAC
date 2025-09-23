import { Request, Response, NextFunction } from "express";
import { Permission } from "../models";

export const authorize = (requiredPermission: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user ;
    if (!user) return res.status(401).json({ status: "error", message: "Unauthorized" });

    const rolePermissions = user.role?.permissions?.map((p: Permission) => p.key) || [];
    const customPermissions = user.customPermissions?.map((p: Permission) => p.key) || [];

    const effectivePermissions = [...new Set([...rolePermissions, ...customPermissions])];

    if (!effectivePermissions.includes(requiredPermission)) {
      return res.status(403).json({ status: "error", message: "Forbidden: insufficient permissions" });
    }

    next();
  };
};
