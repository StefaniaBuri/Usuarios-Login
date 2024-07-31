import { Injectable } from '@angular/core';
import { Ilenguajes } from '../interfaces/ilenguajes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private static LS_KEY = "lenguajes";
  public lenguajes: Ilenguajes[] = [];

  constructor() { 
    this.load();
  }

  public agregar(lista: Ilenguajes): void {
    this.lenguajes.push(lista);
    this.save();
  }

  private load() {
    const data = localStorage.getItem(UsuarioService.LS_KEY);
    if (data != null) {
      this.lenguajes = JSON.parse(data);
    }
  }

  public save() {
    const data = JSON.stringify(this.lenguajes);
    localStorage.setItem(UsuarioService.LS_KEY, data);
  }
}
