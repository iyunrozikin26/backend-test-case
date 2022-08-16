'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Borrow.init({
    memberCode: DataTypes.STRING,
    bookCode: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    status: DataTypes.STRING,
    return: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Borrow',
  });
  return Borrow;
};