import express from "express";
import createMongoConnection from "./context/MongoConnection";
createMongoConnection();

import proyectoRouter from "./proyecto/infrastructure/rest/proyecto.route";

const app = express();
const port = 8080;

app.use(express.json());
app.use("/proyecto", proyectoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});