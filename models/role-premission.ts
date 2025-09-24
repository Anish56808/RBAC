import { Table, Column, Model, ForeignKey, DataType } from "sequelize-typescript";
import { Role } from "./role";
import { Permission } from "./permission";

@Table({ tableName: "role_permissions", timestamps: false })
export class RolePermission extends Model<RolePermission> {
  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID, allowNull: false })
  roleId!: string;

  @ForeignKey(() => Permission)
  @Column({ type: DataType.UUID, allowNull: false })
  permissionId!: string;
}
