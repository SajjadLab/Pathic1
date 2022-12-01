// Requirements
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import dbo from "./db/conn.js";
import tgjRouter from "./routes/tgjRecords.js";
import blogRouter from "./routes/blogRecords.js";
import path from "path";
import {fileURLToPath} from 'url';

// Initialization
const app = express();
const port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use Decleration
app.use(cors());
app.use(express.json());
app.use(tgjRouter);
app.use(blogRouter);
app.use(express.static(path.join(__dirname, "frontend", "build")));


app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });

  console.log(`Server is running on port: ${port}`);
});
