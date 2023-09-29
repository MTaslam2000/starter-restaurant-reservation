/**
 * List handler for reservation resources
 */
const reservationService = require("./reservations.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorboundary.js");

async function list(req, res) {
  const date = req.query.date;
  const mobile_number = req.query.mobile_number;
  // console.log(date);
  if (date) {
    const data = await reservationService.list(date);
    // console.log(data, "date");
    res.json({
      data: data,
    });
  }
  if (mobile_number) {
    const data = await reservationService.search(mobile_number);
    // console.log(data, "number");
    res.json({
      data: data,
    });
  }
}

async function create(req, res) {
  const data = await reservationService.create(req.body.data);
  res.status(201).json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(create)],
};
