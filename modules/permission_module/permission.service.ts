import { Permission } from "../../models/permission";

export class PermissionService {
  static async createPermission(key: string, description?: string) {
    return Permission.create({ key, description });
  }

  static async listPermissions() {
    return Permission.findAll();
  }
}
