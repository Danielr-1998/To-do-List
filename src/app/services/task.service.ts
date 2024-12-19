import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private storage: Storage) {
    this.storage.create();  // Inicializa el almacenamiento (esto es importante)
  }

  // Guardar una tarea en el almacenamiento
  async addTask(task: string): Promise<void> {
    const tasks = await this.getTasks();
    tasks.push(task);
    await this.storage.set('tasks', tasks);
  }

  // Obtener todas las tareas almacenadas
  async getTasks(): Promise<string[]> {
    const tasks = await this.storage.get('tasks');
    return tasks || [];  // Retorna un arreglo vacío si no hay tareas
  }
}
