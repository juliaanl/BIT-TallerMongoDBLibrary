import express from "express";
import books from "../controllers/books.js";


const router = express.Router();
router.post("/registerBook", books.saveBook);

export default router;

