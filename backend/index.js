import express from "express";
import cors from "cors";
import apiRouter from "./apiRouter.js";

const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}.`);
});

app.get('/api', (req, res) => {
  res.json({ igor: 'хороший человек' });
});
