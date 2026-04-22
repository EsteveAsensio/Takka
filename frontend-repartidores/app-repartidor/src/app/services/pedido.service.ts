import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidosActivos: any[] = [];
  pedidosCompletados: any[] = [];

  pedidosDisponibles: any[] = [
    {
      id: 1,
      restaurante: 'KFC',
      imagen: 'assets/kfc.png',
      descripcion: '2 menús pollo',
      direccion: 'Calle Cairo 123',
      precio: 5,
      km: 1.2,
      fecha: '2026-04-18'
    },
    {
      id: 2,
      restaurante: 'Pizza Hut',
      imagen: 'assets/pizzahut.png',
      descripcion: 'Pizza grande',
      direccion: 'Avenida Nile 45',
      precio: 8,
      km: 2.5,
      fecha: '2026-04-18'
    }
  ];


  // 📦 ACEPTAR PEDIDO
  aceptarPedido(pedido: any) {
    pedido.estado = 'aceptado';

    this.pedidosDisponibles =
      this.pedidosDisponibles.filter(p => p.id !== pedido.id);

    this.pedidosActivos.push(pedido);
  }

  // 🚴 CAMBIAR ESTADO
  cambiarEstado(pedido: any) {

    if (pedido.estado === 'aceptado') {
      pedido.estado = 'en_reparto';
    }

    else if (pedido.estado === 'en_reparto') {
      pedido.estado = 'completado';
      this.pedidosCompletados.push(pedido);
    }
  }

  // 📊 RESUMEN
  getPedidosCompletados() {
    return this.pedidosCompletados;
  }

}