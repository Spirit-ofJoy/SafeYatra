const infoRoute = require("./Router");

const router = (App) => {
  App.use("/api/details", infoRoute);
};

module.exports = router;
