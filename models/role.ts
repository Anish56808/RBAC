import { Table, Column, Model, DataType, BelongsToMany } from "sequelize-typescript";
import { Permission } from "./premission";
import { RolePermission } from "./role-premission";
import { User } from "./user";

@Table({ tableName: "roles", timestamps: true })
export class Role extends Model<Role> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name!: string;

  @BelongsToMany(() => Permission, () => RolePermission)
  permissions?: Permission[];

  @BelongsToMany(() => User, () => Role)
  users?: User[];
}
