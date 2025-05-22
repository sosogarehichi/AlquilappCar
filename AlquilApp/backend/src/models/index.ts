// This file exports data models, possibly using an ORM, to interact with the database.

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database'; // Assuming you have a database.ts file for Sequelize connection

export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'users',
    sequelize, // passing the `sequelize` instance is required
  }
);

// Export other models as needed
export default {
  User,
};