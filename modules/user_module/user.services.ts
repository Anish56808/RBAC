import { User, Role, Permission } from "../../models";
import bcrypt from "bcrypt";

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
interface UserCreationAttributes {
  email: string;
  password: string;
  name?: string;
  roleId?: string;
  isSuperAdmin?: boolean;
}

export class UserService {
  // Create user with hashed password
  static async createUser(data: UserCreationAttributes) {
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
    return User.create({ ...data, password: hashedPassword } as any );
  }

  // Assign role to user
  static async assignRole(userId: string, roleId: string) {
    const user = await User.findByPk(userId);
    if (!user) throw new Error("User not found");
    user.roleId = roleId;
    await user.save();
    return user;
  }

  // Add custom permission to user
  static async addCustomPermission(userId: string, permissionId: string) {
    const user = await User.findByPk(userId);
    const permission = await Permission.findByPk(permissionId);
    if (!user || !permission) throw new Error("User or Permission not found");
    await user.$add("customPermissions", permission);
    return user;
  }

  // Remove custom permission
  static async removeCustomPermission(userId: string, permissionId: string) {
    const user = await User.findByPk(userId);
    const permission = await Permission.findByPk(permissionId);
    if (!user || !permission) throw new Error("User or Permission not found");
    await user.$remove("customPermissions", permission);
    return user;
  }

  // Fetch user with role & permissions
  static async getUserById(userId: string) {
    return User.findByPk(userId, {
      include: [
        { model: Role, include: [Permission] },
        { model: Permission, as: "customPermissions" },
      ],
    });
  }
}
