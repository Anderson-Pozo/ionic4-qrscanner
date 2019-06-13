import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public dataLocal:DataLocalService) {}

  enviarCorreo(){
    this.dataLocal.enviarCorreo();
  }

  abrirRegistro(registro){
    console.log('Registro', registro);
    this.dataLocal.abrirRegistro(registro);
  }
  
}
