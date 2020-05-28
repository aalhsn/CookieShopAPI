const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "alhsn123!@#",
  database: "cookiedb",
  dialect: "postgres",
  host: "localhost"
});


module.exports = db;