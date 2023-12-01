import Tarea from "./Tarea";
export default interface Proyecto{
    id?: string;
    name: string;
    tareas?: Tarea[];
  }