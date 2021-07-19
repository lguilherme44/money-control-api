import Client from "../models/Client";

class ClientController {
  async index(req, res) {
    const clients = await Client.findAll();

    return res.json(clients);
  }
}

export default new ClientController();
