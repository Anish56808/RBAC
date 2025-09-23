import { Table, Column, Model, DataType, BelongsToMany } from "sequelize-typescript";
import { Role } from "./role";
import { RolePermission } from "./role-premission";
import { User } from "./user";
import { UserPermission } from "./user-premission";

@Table({ tableName: "permissions", timestamps: true })
export class Permission extends Model<Permission> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  key!: string;

  @Column({ type: DataType.STRING })
  description?: string;

  @BelongsToMany(() => Role, () => RolePermission)
  roles?: Role[];

  @BelongsToMany(() => User, () => UserPermission)
  users?: User[];
}
