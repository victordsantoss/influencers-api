import models from '../models/_index.js';
import UserService from './user.services.js';
import ChanelService from './chanel.service.js';

const userService = new UserService(models.User);
const chanelService = new ChanelService(models.Chanel);

const services = {
  userService,
  chanelService,
};

export default services;
