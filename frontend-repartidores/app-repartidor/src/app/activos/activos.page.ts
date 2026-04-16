import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-activos',
  templateUrl: './activos.page.html',
  styleUrls: ['./activos.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, HeaderComponent]
})
export class ActivosPage implements OnInit {

  constructor() {}

  ngOnInit() {}

  // 📦 DATOS MOCK (IMPORTANTE: con estado)
  pedidos = [
    {
      id: 1,
      restaurante: 'KFC',
      imagen: 'assets/kfc.png',
      descripcion: '2 menús pollo',
      direccion: 'Calle Cairo 123',
      precio: 5,
      estado: 'aceptado'
    },
    {
      id: 2,
      restaurante: 'Pizza Hut',
      imagen: 'assets/pizzahut.png',
      descripcion: 'Pizza grande + bebida',
      direccion: 'Avenida Nile 45',
      precio: 8,
      estado: 'en_reparto'
    }
  ];

  // 🔘 TEXTO DINÁMICO DEL BOTÓN
  getTextoBoton(estado: string): string {
    if (estado === 'aceptado') return 'Iniciar reparto';
    if (estado === 'en_reparto') return 'Marcar como entregado';
    return '';
  }

  // 🔄 CAMBIO DE ESTADO
  cambiarEstado(pedido: any) {
    if (pedido.estado === 'aceptado') {
      pedido.estado = 'en_reparto';
    } else if (pedido.estado === 'en_reparto') {
      pedido.estado = 'completado';
    }
  }

  getClaseBoton(estado: string) {
    if (estado === 'aceptado') return 'btn-reparto';
    if (estado === 'en_reparto') return 'btn-entregado';
  return '';
}

}