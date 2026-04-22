import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../shared/header/header.component";
import { PedidoService } from '../services/pedido.service'; // 👈 IMPORTANTE

@Component({
  selector: 'app-activos',
  templateUrl: './activos.page.html',
  styleUrls: ['./activos.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, HeaderComponent]
})
export class ActivosPage implements OnInit {

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {}

  // 🔥 USAR SERVICIO
  get pedidos() {
    return this.pedidoService.pedidosActivos;
  }

  // 🔘 TEXTO BOTÓN
  getTextoBoton(estado: string): string {
    if (estado === 'aceptado') return 'Iniciar reparto';
    if (estado === 'en_reparto') return 'Marcar como entregado';
    return '';
  }

  // 🔄 CAMBIO DE ESTADO REAL
  cambiarEstado(pedido: any) {
    this.pedidoService.cambiarEstado(pedido);
  }

  // 🎨 CLASE BOTÓN
  getClaseBoton(estado: string) {
    if (estado === 'aceptado') return 'btn-reparto';
    if (estado === 'en_reparto') return 'btn-entregado';
    return '';
  }

}