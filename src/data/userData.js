const Datastore = require('../utils/dbQueryPromise');
const BaseDataTable = require('./BaseDataTable');

class userData extends BaseDataTable {
  constructor() {
    super("users");
    this.checkIfTableExist().then((isTableExist) =>
      !isTableExist ? this.createTableProducts() : ""
    );
  }

  createTableProducts() {
    Datastore(
      "CREATE TABLE users " +
        "(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), score INT)" +
        " CHARACTER SET = utf8"
    ).then(() => this.insertBaseData());
  }
}

module.exports = new productsData();
