import { Model, DataTypes, Sequelize } from 'sequelize';

class ChanelModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allownull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allownull: true,
          foreignKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allownull: false,
        },
        branch: {
          type: DataTypes.STRING,
          allownull: false,
        },
        views: {
          type: DataTypes.INTEGER,
          allownull: false,
          defaultValue: 0,
        },
        subscribed: {
          type: DataTypes.INTEGER,
          allownull: false,
          defaultValue: 0,
        },
        members: {
          type: DataTypes.INTEGER,
          allownull: false,
          defaultValue: 0,
        },
        grossIncome: {
          type: DataTypes.FLOAT,
          allownull: false,
          defaultValue: 0,
        },
        netIncome: {
          type: DataTypes.FLOAT,
          allownull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: 'chanel',
      },
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.UserModel, { foreignKey: 'userId', as: 'user' });
  }
}

export default ChanelModel;
