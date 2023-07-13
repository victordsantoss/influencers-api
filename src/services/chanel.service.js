import models from '../models/_index.js';

class ChanelService {
  constructor(ChanelModel) {
    this.chanel = ChanelModel;
  }
  async findAll() {
    return this.chanel.findAll({});
  }

  async createChanel(data) {
    return this.chanel.create(data);
  }

  async findById(userId) {
    return this.chanel.findOne({ where: { userId } });
  }

  async updateChanel(payload, userId) {
    const [updatedRows] = await this.chanel.update(
      payload,
      { where: { userId } },
    );
    if (updatedRows) {
      const updatedChanel = await this.findById(userId);
      return updatedChanel;
    } else {
      return false;
    }
  }
}

export default ChanelService;
