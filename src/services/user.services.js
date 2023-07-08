class UserService {
  constructor(UserModel) {
    this.user = UserModel;
  }
  async findAll() {
    return this.user.findAll();
  }
}

export default UserService;
