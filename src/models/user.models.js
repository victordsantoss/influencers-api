import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelizeConfig from '../config/sequelize.js';

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
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal(
            'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
          ),
        },
      },
      {
        sequelize,
        tableName: 'user',
      },
    );
  }
}
UserModel.init(sequelizeConfig, Sequelize.DataTypes);
export default UserModel;