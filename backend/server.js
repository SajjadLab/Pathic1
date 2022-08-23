// Requirements
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import dbo from "./db/conn.js";
import tgjRouter from "./routes/tgjRecords.js";

// Initialization
const app = express();
const port = process.env.PORT || 5000;

// Use Decleration
app.use(cors());
app.use(express.json());
app.use(tgjRouter);


app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });

  console.log(`Server is running on port: ${port}`);
});
