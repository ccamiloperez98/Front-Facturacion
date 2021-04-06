import { Factura } from './../_model/Factura';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  url = `${environment.HOST}`;

constructor(private http: HttpClient) { }

public guardarFactura(factura: Factura){
  return this.http.post(`${this.url}/api/facturas/guardar`, factura);
}

}
