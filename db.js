const Orcl = require("oracledb");
Orcl.outFormat = Orcl.OUT_FORMAT_OBJECT;
module.exports = class DB {
  constructor() {
    this.hostname = "SERVER";
    this.servicename = "orclpdb.localdomain";
    this.username = "PASSPORT";
    this.password = "PASSPORT";
  }
  async run() {
    let connection;
    try {
      connection = await Orcl.getConnection({
        user: this.username,
        password: this.password,
        connectString: `${this.hostname}:1521/${this.servicename}`
      });

      const result = await connection.execute("SELECT * FROM RELIGION");
      console.log(result.rows)
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
