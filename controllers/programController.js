const { Program } = require("../models");

// methods for the booksController
module.exports = {
  findAll: function (req, res) {
    Program.find(req.query)
      .then((dbProgram) => res.json(dbProgram))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    Program.findById(req.params.id)
      .then((dbProgram) => res.json(dbProgram))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  create: function (req, res) {
    Program.create(req.body)
      .then((dbProgram) => res.json(dbProgram))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Program.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbProgram) => res.json(dbProgram))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Program.deleteOne({ _id: req.params.id })
      .then((dbProgram) => res.json(dbProgram))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
