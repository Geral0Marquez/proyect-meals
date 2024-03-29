const { db, DataTypes } = require('../utils/database.util')


//proyect

const User = db.define('user', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'active',
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'normal',
    },
  });
  
  module.exports = { User };
  