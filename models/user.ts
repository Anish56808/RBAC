import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import bcrypt from "bcrypt";
import { Role } from "./role";
import { Permission } from "./premission";
import { UserPermission } from "./user-premission";

@Table({ tableName: "users", timestamps: true })
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  @Column({ type: DataType.STRING })
  name?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isSuperAdmin!: boolean;

  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID })
  roleId?: string;

  @BelongsTo(() => Role)
  role?: Role;

  @BelongsToMany(() => Permission, () => UserPermission)
  customPermissions?: Permission[];

  // Compare password
  async checkPassword(password: string) {
    return bcrypt.compare(password, this.password);
  }
}
