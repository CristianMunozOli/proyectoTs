import Proyecto from "./proyecto";

export default interface ProyectoRepository {
  getAllProyectos(): Promise<Proyecto[] | undefined>;
  getProyectoById(id: string): Promise<Proyecto | undefined>;
  createProyecto(proyecto: any): Promise<Proyecto | undefined>;
}