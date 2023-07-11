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
}

export default ChanelService;
