const Orcl = require("oracledb");
Orcl.outFormat = Orcl.OUT_FORMAT_OBJECT;
module.exports = class DB {
  constructor() {
    this.hostname = "SERVER";
    this.servicename = "orclpdb.localdomain";
  }
  async runSQL(username, password, SQLString) {
    let connection;
    try {
      connection = await Orcl.getConnection({
        user: username,
        password: password,
        connectString: `${this.hostname}:1521/${this.servicename}`
      });
      const result = await connection.execute(SQLString);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
};
