import  Tarea  from "../../tarea/domain/Tarea";
export default interface Proyecto{
    id?: string;
    name: string;
    tareas?: Tarea[];
  }