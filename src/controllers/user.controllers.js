import services from '../services/_index.js';
export class UserController {
  constructor() {
    this.userService = services.userService;
  }

  index = async (req, res) => {
    try {
      const users = await this.userService.findAll();
      return res.status(200).json({ data: users, message: 'Influencers encontrados com sucesso!', type: "success" });
    } catch (error) {
      console.info(`error: ${error}`);
      return res
        .status(500)
        .json({ data: null, message: 'Erro na busca por influencers.', type: "error" });
    }
  };

  createUser = async (req, res) => {
    try {
      const { name, email, cpf, phone, role } = req.body;
      const data = {
        name, email, cpf, phone, role, status: 'active'
      }
      const userCreated = await this.userService.createUser(data)
      return res.status(200).json({ data: userCreated, message: "Usuário criado com sucesso!", type: "success" });
    } catch (error) {
      console.info(`error: ${error}`);
      return res
        .status(500)
        .json({ data: null, message: 'Erro na busca por influencers.', type: "error" });
    }
  };
}
