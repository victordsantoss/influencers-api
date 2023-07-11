import models from '../models/_index.js';

class UserService {
  constructor(UserModel) {
    this.user = UserModel;
  }
  async findAll() {
    return this.user.findAll({
      include: [{ model: models.Chanel, as: 'chanel' }],
    });
  }

  async findByEmail(email) {
    return this.user.findOne({ where: { email } });
  }

  async createUser(data) {
    return this.user.create(data);
  }
}

export default UserService;
