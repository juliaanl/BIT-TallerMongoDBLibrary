import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import books from "./routes/books.js";

dotenv.config();

const sft = express();
sft.use(express.json());
sft.use(cors());
sft.use("/api/books", books);

sft.listen(process.env.Port, () => console.log("Server: " + process.env.PORT));

db.dbConnection();
