import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./components/formulario/formulario.component";
import { ContenedorComponent } from "./components/contenedor/contenedor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, ContenedorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listaLengProgramacion';
}
