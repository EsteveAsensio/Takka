import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonDatetime, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { addIcons } from 'ionicons';
import { cubeOutline, cashOutline, navigateOutline, starOutline } from 'ionicons/icons';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
  standalone: true,
  imports: [IonContent, IonDatetime, CommonModule, FormsModule, HeaderComponent, IonIcon]
})
export class ResumenPage implements OnInit {

  constructor(private pedidoService: PedidoService) {
    addIcons({ cubeOutline, cashOutline, navigateOutline, starOutline });
  }
pedidosFiltrados: any[] = [];

  totalPedidos = 0;
  totalDinero = 0;
  totalKm = 0;
  topRestaurante = '-';

  ngOnInit() {
    this.cargarResumenHoy();
  }

  // 📊 CARGAR SOLO COMPLETADOS DE HOY
  cargarResumenHoy() {

    const hoy = new Date().toISOString().split('T')[0];

    this.pedidosFiltrados = this.pedidoService.pedidosActivos
      .filter(p => p.estado === 'completado' && p.fecha === hoy);

    this.calcularStats();
  }

  // 📊 CALCULAR MÉTRICAS
  calcularStats() {

    this.totalPedidos = this.pedidosFiltrados.length;

    this.totalDinero = this.pedidosFiltrados
      .reduce((acc, p) => acc + p.precio, 0);

    this.totalKm = this.pedidosFiltrados
      .reduce((acc, p) => acc + p.km, 0);

    // 🔥 TOP RESTAURANTE
    const conteo: any = {};

    this.pedidosFiltrados.forEach(p => {
      conteo[p.restaurante] = (conteo[p.restaurante] || 0) + 1;
    });

    this.topRestaurante = Object.keys(conteo).length
      ? Object.keys(conteo).reduce((a, b) =>
          conteo[a] > conteo[b] ? a : b
        )
      : '-';
  }

  // 📅 FILTRO POR FECHA
  onFechaChange(event: any) {
    const fecha = event.detail.value.split('T')[0];

    this.pedidosFiltrados = this.pedidoService.pedidosActivos
      .filter(p => p.estado === 'completado' && p.fecha === fecha);

    this.calcularStats();
  }

}