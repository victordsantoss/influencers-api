import services from '../services/_index.js';
export class ChanelController {
  constructor() {
    this.chanelService = services.chanelService;
  }

  index = async (req, res) => {
    try {
      const users = await this.chanelService.findAll();
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

  createChanel = async (req, res) => {
    try {
      const {
        userId,
        name,
        branch,
        views,
        subscribed,
        members,
        grossIncome,
        netIncome,
      } = req.body;
      const data = {
        userId,
        name,
        branch,
        views,
        subscribed,
        members,
        grossIncome,
        netIncome,
      };
      const chanelCreated = await this.chanelService.createChanel(data);
      return res.status(200).json({
        data: chanelCreated,
        message: 'Canal criado com sucesso!',
        type: 'success',
      });
    } catch (error) {
      console.info(`error: ${error}`);
      return res.status(500).json({
        data: null,
        message: 'Erro na criação de canal.',
        type: 'error',
      });
    }
  };
}
