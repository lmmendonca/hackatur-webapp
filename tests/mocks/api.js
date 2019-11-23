const app = require("express")();

const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Authorization");
  next();
});

app.listen(8080, () => console.log("Mock api running"));
