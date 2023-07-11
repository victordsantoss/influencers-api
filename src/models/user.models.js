import { Model, DataTypes, Sequelize } from 'sequelize';

class UserModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allownull: false,
        },
        uid: {
          type: DataTypes.STRING,
          allownull: true,
        },
        cpf: {
          type: DataTypes.STRING,
          allownull: false,
        },
        name: {
          type: DataTypes.STRING,
          allownull: false,
        },
        email: {
          type: DataTypes.STRING,
          allownull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allownull: false,
        },
        role: {
          type: DataTypes.ENUM({
            values: ['sadmin', 'admin', 'influencer', 'staff'],
          }),
          allowNull: false,
          defaultValue: 'notStarted',
        },
        status: {
          type: DataTypes.ENUM({
            values: ['active', 'inactive'],
          }),
          allowNull: false,
          defaultValue: 'active',
        },
      },
      {
        sequelize,
        tableName: 'user',
      },
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.ChanelModel, { foreignKey: 'userId', as: 'chanel' });
  }
}
export default UserModel;
