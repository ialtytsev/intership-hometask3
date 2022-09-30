import express from "express";
import { router } from "./src/routes/notes";

const app = express();

app.use("/notes", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
