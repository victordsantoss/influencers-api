class UserService {
  constructor(UserModel) {
    this.user = UserModel;
  }
  async findAll() {
    return this.user.findAll();
  }

  async createUser(data) {
    return this.user.create(data);
  }
}

export default UserService;
