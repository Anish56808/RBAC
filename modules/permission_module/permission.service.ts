import { Permission } from "../../models/premission";

export class PermissionService {
  static async createPermission(key: string, description?: string) {
    return Permission.create({ key, description });
  }

  static async listPermissions() {
    return Permission.findAll();
  }
}
