import models from '../models/_index.js';
import UserService from './user.services.js';

const userService = new UserService(models.User);

const services = {
  userService,
};

export default services;
