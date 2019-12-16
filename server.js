const DB = require('./db');

let dbi = new DB();

console.log(dbi.hostname, dbi.password, dbi.servicename, dbi.username);
dbi.run();
