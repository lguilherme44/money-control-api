import Sequelize, { Model } from "sequelize";

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "clients",
      }
    );
  }
}

export default Client;
