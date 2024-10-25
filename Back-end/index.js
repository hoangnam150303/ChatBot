const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./database/database");
dotenv.config();
const port = process.env.PORT || 8000;
const router = require("./routes/Routes");
const app = express();

//middleware
app.use(express.json());
// Router
app.use("/api/user", router);

app.listen(port, () => {
  console.log(`server is working on port: ${port}`);
  connectDb();
});
