class UserService {
  constructor(UserModel) {
    this.user = UserModel;
  }
  async findAll() {
    return this.user.findAll();
  }

  async findByEmail(email) {
    return this.user.findOne({ where: { email } });
  }

  async createUser(data) {
    return this.user.create(data);
  }
}

export default UserService;
