import express from "express";
import ProyectoRepositoryMongoDB from "../db/proyecto.mongo";
import ProyectoRepository from "../../domain/Proyecto.repository";

const router = express.Router();
const proyectoRepository: ProyectoRepository = new ProyectoRepositoryMongoDB();

router.get("/", async (req, res) => {
  try {
    const proyectos = await proyectoRepository.getAllProyectos();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const proyectoId = req.params.id;
    const proyecto = await proyectoRepository.getProyectoById(proyectoId);
    if (proyecto) {
      res.json(proyecto);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProyecto = req.body;
    const createProyecto = await proyectoRepository.createProyecto(newProyecto);
    res.status(201).json(createProyecto);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;