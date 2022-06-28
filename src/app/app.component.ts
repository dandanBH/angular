import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(private service: TransferenciaService){

  }

  transferir($event){
    console.log($event);
    this.service.adicionar($event)
  }
}
