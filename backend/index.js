import express from "express";
import cors from "cors";
import apiRouter from "./apiRouter.js";
import database from './database.js'
import bodyParser from 'body-parser';

const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}.`);
});