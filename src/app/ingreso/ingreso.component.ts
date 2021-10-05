import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { ingresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[]=[];

  constructor(private IngresoServicio:ingresoServicio) {

   }

  ngOnInit(): void {
    this.ingresos = this.IngresoServicio.ingresos;
  }

  eliminarIngreso(ingreso:Ingreso){
    this.IngresoServicio.eliminar(ingreso);
  }


}
