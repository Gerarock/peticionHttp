import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService {

  // Se defina la propiedad URL
  public url: string;

  constructor(private _http: Http) {
    // Json sacado de la pagina https://jsonplaceholder.typicode.com
    this.url = 'https://jsonplaceholder.typicode.com/posts';
   }

   getArticulos() {
    return this._http.get(this.url) // Realiza la peticion de la Url del Rest
                     .map(res => res.json()); // Con el metodo MAP se captura la respuesta
                                              // que nos da la peticion HTTP
                                              // y se transforma a objeto con .json()
                    }
}
