import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';  // Asegúrate de importar el servicio
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule,CommonModule],
})
export class HomePage implements OnInit {
  taskName: string = '';  // Tarea que el usuario ingresa
  taskList: string[] = [];  // Lista de tareas

  constructor(private taskService: TaskService) {}

  // Al cargar la página, obtenemos las tareas almacenadas
  ngOnInit() {
    this.loadTasks();
  }

  // Método para cargar tareas desde el almacenamiento
  async loadTasks() {
    this.taskList = await this.taskService.getTasks();
  }

  // Método para agregar una tarea nueva
  async addTask() {
    if (this.taskName.trim() !== '') {
      await this.taskService.addTask(this.taskName);
      this.taskName = '';  // Limpiar el campo de entrada
      this.loadTasks();  // Recargar la lista de tareas
    } else {
      console.log('Por favor, ingrese un nombre para la tarea');
    }
  }
}
