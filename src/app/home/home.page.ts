// src/app/home/home.page.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,  // Asegúrate de que el componente sea independiente
  imports: [IonicModule, FormsModule],  // Añade FormsModule aquí
})
export class HomePage {
  taskName: string = '';  // Propiedad para el nombre de la tarea

  constructor() {}

  // Método para agregar tarea
  addTask() {
    if (this.taskName.trim() !== '') {
      console.log('Tarea agregada:', this.taskName);  // Verifica si funciona
      this.taskName = '';  // Limpiar el campo de entrada después de agregar la tarea
    } else {
      console.log('Por favor, ingrese un nombre para la tarea');
    }
  }
}
