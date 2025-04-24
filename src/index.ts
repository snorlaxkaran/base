import express from "express";
import { config } from "./config";
import { routes } from "./routes";
const app = express();

const PORT = config.PORT;

app.use("/api", routes);
app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
