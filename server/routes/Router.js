const { Router } = require("express");
const ROUTER = new Router();

ROUTER.get("/info", async (req, res) => {
  try {
    const username1 = req.query.username1;
    const username2 = req.query.username2;
    const username3 = req.query.username3;
    const phone1 = req.query.phone1;
    const phone2 = req.query.phone2;
    const phone3 = req.query.phone3;

    console.log(username1);

    res.status(200).json("All details got successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = ROUTER;
