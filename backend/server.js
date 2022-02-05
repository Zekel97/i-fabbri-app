const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');
app.use(cors());

const authLogin = require('./routes/login-route');
//const uploadRoute = require('./routes/upload-route');

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));


app.use("/api/login", authLogin);
//app.use("/api/upload/", uploadRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
})