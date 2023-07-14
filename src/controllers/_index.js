import { UserController } from './user.controllers.js';
import { ChanelController } from './chanel.controllers.js';

const userController = new UserController();
const chanelController = new ChanelController();

const controllers = {
  userController,
  chanelController,
};

export default controllers;
