const knex = require("../db/connection.js");

function list() {
  return knex("tables").select("*").orderBy("table_name");
}

module.exports = {
  list,
};
