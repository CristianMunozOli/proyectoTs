import Proyecto from "../domain/Proyecto";
import ProyectoRepository from "../domain/Proyecto.repository";

export class ProyectoUseCases {
  private proyectoRepository: ProyectoRepository;

  constructor(proyectoRepository: ProyectoRepository) {
    this.proyectoRepository = proyectoRepository;
  }

  async getUserById(id: string) {
    return await this.proyectoRepository.getProyectoById(id);
  }

  async createUser(poyecto: Proyecto) {
    return await this.proyectoRepository.createProyecto(poyecto);
  }
}