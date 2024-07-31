import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/lenguajes.service';
import { Ilenguajes } from '../../interfaces/ilenguajes';
import { Component} from '@angular/core';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  
})
export class FormularioComponent {

  public usuario: string = "";
  public apellido: string = "";
  public password: string = "";

  constructor(public gestorLista: UsuarioService) {}

  addLista() {
    const nuevaLista: Ilenguajes = {
      usuario: this.usuario,
      apellido: this.apellido,
      password: this.password
    }
    this.gestorLista.agregar(nuevaLista);
    this.usuario = "";
    this.apellido = "";
    this.password = "";
    
  }

}
