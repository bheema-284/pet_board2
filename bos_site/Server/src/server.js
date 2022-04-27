const app = require("./index");
require("dotenv").config();

const connect = require("./Configs/db");

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    await connect();    
    console.log("I'm Listening on port 8080");
  } catch (e) {
    console.log("e:", e.message);
  }
});
