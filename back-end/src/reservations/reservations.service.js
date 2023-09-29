const knex = require("../db/connection.js");

function create(newReservation) {
  return knex(tableName)
    .insert(newReservation, "*")
    .then((savedReservations) => savedReservations[0]);
}

function list(reservation_date) {
  return knex("reservations")
    .select("*")
    .where({ reservation_date })
    .whereNot({ status: "finished" })
    .orderBy("reservation_time");
}

function search(mobile_number) {
  return knex("reservations")
    .whereRaw(
      "translate(mobile_number, '() -', '') like ?",
      `%${mobile_number.replace(/\D/g, "")}%`
    )
    .orderBy("reservation_date");
}

module.exports = {
  create,
  list,
  search,
};
