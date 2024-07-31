import { Component } from '@angular/core';
import { FichasComponent } from "../fichas/fichas.component";
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/lenguajes.service';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [FichasComponent, CommonModule],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {

  constructor(public gestorLista: UsuarioService) {
    gestorLista.lenguajes.forEach(l=>{
      console.log(":::::");
      console.log(l);
    })
  }

  
}
