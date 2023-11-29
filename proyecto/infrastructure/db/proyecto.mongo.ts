import { collections } from "../../../context/MongoConnection";
import Proyecto from "../../domain/Proyecto";
import ProyectoRepository from "../../domain/Proyecto.repository";
import { ObjectId } from "mongodb";

export default class ProyectoRepositoryMongoDB implements ProyectoRepository {
  async getAllProyectos(): Promise<Proyecto[] | undefined> {
    const proyectosFromDB = await collections.proyecto.find().toArray();
    if (!proyectosFromDB) return undefined;
    const proyectos: Proyecto[] = proyectosFromDB.map((proyectoFromDB) => {
      const proyecto: Proyecto = {
        id: String(proyectoFromDB._id),
        name: proyectoFromDB.name
      };
      return proyecto;
    });
    return proyectos;
  }

  async getProyectoById(id: string): Promise<Proyecto | undefined> {
    const objectId = new ObjectId(id);
    const proyectoFromDB = await collections.proyecto.findOne({ _id: objectId });
    if (!proyectoFromDB) return undefined;
    const proyecto: Proyecto = {
      id: String(proyectoFromDB._id),
      name: proyectoFromDB.name
    };
    return proyecto;
  }

  async createProyecto(proyecto: Proyecto): Promise<Proyecto | undefined> {
    const result = await collections.proyecto.insertOne(proyecto);
    const id = String(result.insertedId);
    return await this.getProyectoById(id);
  }
}