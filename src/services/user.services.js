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
    return this.user.findOne({ where: { email }, include: [{ model: models.Chanel, as: 'chanel' }], });
  }

  async findById(userId) {
    return this.user.findOne({ where: { id: userId }, include: [{ model: models.Chanel, as: 'chanel' }], });
  }

  async createUser(data) {
    return this.user.create(data);
  }

  async updateUser(payload, userId) {
    const [updatedRows] = await this.user.update(
      payload,
      { where: { id: userId } },
    );
    if (updatedRows) {
      const updatedUser = await this.findById(userId);
      return updatedUser;
    } else {
      return false;
    }
  }

}

export default UserService;
