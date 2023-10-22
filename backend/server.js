const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const {notFound,errorHandler} = require("./middlewares/errorMiddleware");

// console.log(chats);
dotenv.config(); // Install bhi krna pdta hai library
const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
  res.end();
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 500;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
