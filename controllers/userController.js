const { User, UserSession } = require("../models");
const bcrypt = require("bcrypt");

// methods for the booksController
module.exports = {
  findById: function (req, res) {
    User.findById(req.params.id)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  login: function (req, res) {
    User.findOne(req.body.email)
      .then(async function (dbUser) {
        if (!dbUser) {
          res.send({ user: false, message: "No user with that email" });
          return;
        }
        if (await bcrypt.compare(req.body.password, dbUser.password)) {
          let cookievalue = await bcrypt.hash("secretword", 10);
          res
            .cookie("cookiename", cookievalue)
            .send({ user: dbUser._id, message: "Successfully logged in!" });
          UserSession.create({
            userId: dbUser._id,
            session: cookievalue,
          }).then((res) => {
            console.log("cookie");
          });
        } else {
          res.send({ user: false, message: "Email or Password is incorrect" });
        }
      })
      .catch((err) => {
        res.send(err);
        console.log("unexpected error");
      });
  },
  logout: function (req, res) {
    res.clearCookie("cookiename").send(200);

    const cookies = req.headers.cookie.split(";");
    let cookievalue = null;
    cookies.forEach((element) => {
      if (element.split("=")[0].trim() === "cookiename") {
        cookievalue = decodeURIComponent(element.split("=")[1].trim());
      }
    });

    UserSession.deleteOne({
      session: cookievalue,
    })
      .then((res) => {
        console.log("Cookie has been cleared");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  register: async function (req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      User.create({
        ...req.body,
        password: hashedPassword,
      }).then((dbUser) => {
        res.send({ user: dbUser._id, message: "Account created!" });
      });
    } catch (err) {
      res.send(err);
    }
  },
  update: function (req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    User.deleteOne({ _id: req.params.id })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
