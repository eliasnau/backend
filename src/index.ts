import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

const port = process.env.PORT || 8080;
const ip_address = process.env.IP_ADDRESS || "http://localhost";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on " + ip_address + ":" + port + "/");
});

const MONGO_URL =
  "mongodb+srv://admin:1lfNxZGY4h2rfZh9@cluster0.cvenjiv.mongodb.net/?retryWrites=true&w=majority"; //! Change to ENV variables

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
