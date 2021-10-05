import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { egresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})

export class EgresoComponent implements OnInit {

  @Input() ingresoTotal:number;

  egresos:Egreso[]=[];

  constructor(private EgresoServicio:egresoServicio) {

   }

  ngOnInit(): void {
    this.egresos = this.EgresoServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.EgresoServicio.eliminar(egreso);
  }

calcularPorcentaje(egreso:Egreso){
return egreso.valor / this.ingresoTotal;
}

}
