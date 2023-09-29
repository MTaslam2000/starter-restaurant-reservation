const tablesService = require("./tables.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await tablesService.list();
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
