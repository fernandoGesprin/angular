import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
  nombre = 'Fernando Diez';
  edad = '40';
  activo = true;
  sueldos = [1000,1100,1200];

  esActivo(){
    if(this.activo){
      return 'Estado activo';
    }else{
      return 'Estado inactivo';
    }
  }
  sumaSueldos(){
    let suma=0;
    for(let x=0; x<this.sueldos.length;x++){
      suma+=this.sueldos[x];
    }
    return suma;
  }
}
