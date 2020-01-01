const DB = require("./db");

let dbi = new DB();

console.log(dbi.hostname, dbi.password, dbi.servicename, dbi.username);
const results = dbi.runSQL('PASSPORT', 'PASSPORT', 'SELECT * FROM NATION');
results.then(results =>
    console.log(results.rows)
);
