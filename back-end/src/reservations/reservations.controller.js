/**
 * List handler for reservation resources
 */
const reservationService = require("./reservations.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorboundary.js");

async function list(req, res) {
  const date = req.query.date;
  const mobile_number = req.query.mobile_number;
  const data = await (date
    ? reservationService.list(date)
    : reservationService.search(mobile_number));
  res.json({ data });
}

async function create(req, res) {
  const data = await reservationService.create(req.body.data);
  res.status(201).json({
    data: data,
  });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(create)],
};
