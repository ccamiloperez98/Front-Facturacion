import { Producto } from './../../_model/Producto';
import { Detalle } from './../../_model/Detalle';
import { Cliente } from './../../_model/Cliente';
import { FacturaService } from './../../_service/factura.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/_model/Factura';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  form: FormGroup;
  message= "guardado correctamente";
  errorMessage="error al guardar"

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
   this.inicializarForm();
  }

  inicializarForm() {
    this.form = new FormGroup({
      cliente: new FormControl(),
      producto: new FormControl(),
      cantidad: new FormControl(),
      precio: new FormControl()
    });
    }

  onSave(){
    console.log("metodo onSave");
    let cliente= new Cliente();
    let detalle= new Detalle();
    let producto= new Producto();
    let factura= new Factura();
    let listaDetalles: Detalle[] = new Array();

    cliente.idCliente=this.form.value.cliente;
    producto.idProducto=this.form.value.producto;
    detalle.cantidad=this.form.value.cantidad;
    detalle.precio=this.form.value.precio;
    detalle.idProducto=producto;
    
    listaDetalles.push(detalle);
    
    factura.cliente=cliente;
    factura.detalles=listaDetalles;

    console.log(factura);
    this.facturaService.guardarFactura(factura).subscribe(()=>{
      
      console.log("Guardado correctamente");
    });
    
  }
}
