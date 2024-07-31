import { Component, Input } from '@angular/core';
import { Ilenguajes } from '../../interfaces/ilenguajes';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { UsuarioService } from '../../services/lenguajes.service';
import {ChangeDetectionStrategy } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-fichas',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './fichas.component.html',
  styleUrl: './fichas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FichasComponent {
  @Input() ficha: Ilenguajes | undefined;
  @Input() index: any;

  constructor(public gestorLista: UsuarioService) {}

  ngOnInit(){
    console.log(this.ficha);
  }

  deleteItem() {
      if(this.gestorLista.lenguajes){ 
        this.gestorLista.lenguajes.splice(this.index,1)    
        }  
      this.gestorLista.save();
  }

}

