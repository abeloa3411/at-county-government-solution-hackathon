import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Data from "./routes/dataRoutes.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/data", Data);

const PORT = 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT} ...`);
    });
  })
  .catch((err) => console.log(err));
