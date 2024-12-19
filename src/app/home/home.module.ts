// src/app/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { HomePage } from './home.page'; // Importa el componente HomePage

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  // Elimina 'declarations' ya que HomePage es independiente
})
export class HomePageModule {}
