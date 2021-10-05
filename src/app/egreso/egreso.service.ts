import { Egreso } from "./egreso.model";

export class egresoServicio{

  egresos: Egreso[] = [
  new Egreso("arriendo", 6000),
  new Egreso("dotacion", 4200)

  ];

  eliminar(egreso:Egreso){
  const indice: number = this.egresos.indexOf(egreso);
  this.egresos.splice(indice, 1);
  }

}