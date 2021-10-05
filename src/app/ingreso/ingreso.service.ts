import { Ingreso } from "./ingreso.model";

export class ingresoServicio {
ingresos:Ingreso[]=[
new Ingreso("salario", 4000),
new Ingreso("venta de coche", 10000)
];

  eliminar(ingreso:Ingreso){
  const indice: number = this.ingresos.indexOf(ingreso);
  this.ingresos.splice(indice, 1);
  }

}