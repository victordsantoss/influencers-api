import services from '../services/_index.js';
export class UserController {
  constructor() {
    this.userService = services.userService;
  }

  index = async (req, res) => {
    try {
      const users = await this.userService.findAll();
      console.log('first', users);
      return res.status(200).json({ data: users, message: 'Influencers' });
    } catch (error) {
      console.info(`error: ${error}`);
      return res
        .status(500)
        .json({ data: null, message: 'Erro na busca por influencers.' });
    }
  };
}
