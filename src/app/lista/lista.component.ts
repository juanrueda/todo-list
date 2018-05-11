import { Component, OnInit } from '@angular/core';
import {Tarea} from '../tarea';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tarea : Tarea = new Tarea();

  tareas = [];

  constructor() { }

  ngOnInit() {
  }

  agregar() {
      //console.log(this.tarea.nombre);
      this.tarea.estado = false;
      this.tareas.push(this.tarea);

      this.tarea = new Tarea();
      //console.log(this.tareas[0].nombre);
    }


}
