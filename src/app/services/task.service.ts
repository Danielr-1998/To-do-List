// src/app/services/task.service.ts

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storage!: Storage;  // Usamos el operador de aserción no nula para indicar que se inicializará después.

  constructor(private storageService: Storage) {
    this.init();
  }

  private async init() {
    const storage = await this.storageService.create();
    this.storage = storage;
  }

  // Solo agregar una nueva tarea
  addTask(task: string) {
    this.storage.get('tasks').then((tasks) => {
      const tasksList = tasks || [];
      tasksList.push({ name: task });
      this.storage.set('tasks', tasksList);
    });
  }
}
