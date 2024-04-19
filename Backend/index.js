import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, MONGO_URL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log();
  return response.status(260).send("Welcome to MERN Stack App");
});

app.use("/books", booksRoute);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`The App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
