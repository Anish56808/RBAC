import { Role } from "../../models/role";
import { Permission } from "../../models/premission";

export class RoleService {
  static async createRole(name: string) {
    return Role.create({ name });
  }

  static async listRoles() {
    return Role.findAll({ include: [Permission] });
  }

  static async assignPermissions(roleId: string, permissionIds: string[]) {
    const role = await Role.findByPk(roleId);
    if (!role) throw new Error("Role not found");

    const permissions = await Permission.findAll({ where: { id: permissionIds } });
    await role.$set("permissions", permissions);
    return role.reload({ include: [Permission] });
  }
}
