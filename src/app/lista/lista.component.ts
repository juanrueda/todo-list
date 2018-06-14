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
    if(this.tarea.nombre.length > 0){
      this.tarea.estado = false;
      this.tareas.push(this.tarea);
      this.tarea = new Tarea();
    }
  }

  borrar(tarea) {
    var pos = this.tareas.indexOf(tarea);
    this.tareas.splice(pos, 1);
  }

  value = '';

  onEnter(value: string) {
    this.value =  value;
    this.agregar();
  }



}
