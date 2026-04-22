import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../shared/header/header.component";
import { AlertController } from '@ionic/angular';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, HeaderComponent]
})
export class PedidosPage implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {}

  // USAR SERVICIO (NO ARRAY LOCAL)
  get pedidos() {
    return this.pedidoService.pedidosDisponibles;
  }

  // ACEPTAR PEDIDO CON ALERTA
  async aceptarPedido(pedido: any) {

    const alert = await this.alertCtrl.create({
      header: 'Confirmar pedido',
      message: `¿Aceptar ${pedido.precio}€ de ${pedido.restaurante}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.pedidoService.aceptarPedido(pedido);
          }
        }
      ]
    });

    await alert.present();
  }
}