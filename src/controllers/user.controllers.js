import services from '../services/_index.js';
export class UserController {
  constructor() {
    this.userService = services.userService;
  }

  index = async (req, res) => {
    try {
      const users = await this.userService.findAll();
      return res.status(200).json({
        data: users,
        message: 'Usuários encontrados com sucesso!',
        type: 'success',
      });
    } catch (error) {
      console.info(`error: ${error}`);
      return res.status(500).json({
        data: null,
        message: 'Erro na busca por usuários.',
        type: 'error',
      });
    }
  };

  showUserByEmail = async (req, res) => {
    try {
      const { email } = req.params;

      const user = await this.userService.findByEmail(email);
      if (user)
        return res.status(200).json({
          data: user,
          message: 'Usuário encontrado com sucesso!',
          type: 'success',
        });
      if (!user)
        return res.status(204).json({
          data: user,
          message: 'Usuário não encontrado!',
          type: 'success',
        });
    } catch (error) {
      console.info(`error: ${error}`);
      return res.status(500).json({
        data: null,
        message: 'Erro na busca por usuário.',
        type: 'error',
      });
    }
  };

  createUser = async (req, res) => {
    try {
      const { name, email, cpf, phone, role, uid } = req.body;
      const data = {
        name,
        uid,
        email,
        cpf,
        phone,
        role,
        status: 'active',
      };
      const userCreated = await this.userService.createUser(data);
      return res.status(200).json({
        data: userCreated,
        message: 'Usuário criado com sucesso!',
        type: 'success',
      });
    } catch (error) {
      console.info(`error: ${error}`);
      return res.status(500).json({
        data: null,
        message: 'Erro na criação de usuário.',
        type: 'error',
      });
    }
  };
}
