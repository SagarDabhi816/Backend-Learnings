require("dotenv").config();
const connectDB = require("./src/db/db");
const app = require("./src/app");

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DBURL;

connectDB(DB_URL);

app.listen(PORT, () => {
  console.log("Server Is Running On Port", PORT);
});
