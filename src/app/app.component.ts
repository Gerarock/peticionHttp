import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './services/peticiones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PeticionesService]
})
export class AppComponent implements OnInit {
  title = 'peticionesHttp';
  public articulos;

  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    // Llamada al servicio.
    // Para poder capturar la respuesta del servicio se debe utilizar Subscribe, para poder
    // subscribirse al Observable y poder obtener el resultado o error en caso de producirse.
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
        console.log('Resultado Articulos: ', this.articulos);
        if (!this.articulos) {
          console.log('Error en el Servidor');
        }
      },
      error => {
        const errorMessage = <any>error;
        console.log('Error de la peticion: ', errorMessage);
      }
    );
  }

}
