import Proyecto from "../domain/proyecto";
import ProyectoRepository from "../domain/Proyecto.repository";

export class UserUseCases {
  private proyectoRepository: ProyectoRepository;

  constructor(proyectoRepository: ProyectoRepository) {
    this.proyectoRepository = proyectoRepository;
  }

  async getUserById(id: string) {
    return await this.proyectoRepository.getProyectoById(id);
  }

  async createUser(user: Proyecto) {
    return await this.proyectoRepository.createProyecto(user);
  }
}