import { Sequelize } from 'sequelize';
import dbConfig from './database.js';
import models from '../models/_index.js';

const sequelizeConfig = new Sequelize(dbConfig);

models.User.init(sequelizeConfig);
models.Chanel.init(sequelizeConfig);

models.User.associate(sequelizeConfig.models);
models.Chanel.associate(sequelizeConfig.models);

export default sequelizeConfig;
