import Proyecto from "./Proyecto";

export default interface ProyectoRepository {
  getAllProyectos(): Promise<Proyecto[] | undefined>;
  getProyectoById(id: string): Promise<Proyecto | undefined>;
  createProyecto(proyecto: any): Promise<Proyecto | undefined>;
}