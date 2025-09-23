import { Table, Column, Model, ForeignKey, DataType } from "sequelize-typescript";
import { User } from "./user";
import { Permission } from "./premission";

@Table({ tableName: "user_permissions", timestamps: false })
export class UserPermission extends Model<UserPermission> {
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  userId!: string;

  @ForeignKey(() => Permission)
  @Column({ type: DataType.UUID, allowNull: false })
  permissionId!: string;
}
