import {
    Table,
    Column,
    DataType,
    AllowNull,
    IsEmail,
  } from "npm:sequelize-typescript";
  
  import { Model } from "npm:sequelize-typescript";
  
  @Table({
    timestamps: true,
    tableName: "user",
  })
  export class User extends Model {

    @Column({ type: DataType.STRING, allowNull: false })
    public name!: string;
  
    @IsEmail
    @Column({ type: DataType.STRING, allowNull: false })
    public email!: string;
  
    @AllowNull
    @Column({ type: DataType.STRING })
    public password?: string;
  }
  