import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../shared/header/header.component";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, HeaderComponent]
})
export class PedidosPage implements OnInit {

  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}

  // 📦 DATOS MOCK
  pedidos = [
    {
      id: 1,
      restaurante: 'KFC',
      imagen: 'assets/kfc.png',
      descripcion: '2 menús pollo',
      direccion: 'Calle Cairo 123',
      precio: 5
    },
    {
      id: 2,
      restaurante: 'Pizza Hut',
      imagen: 'assets/pizzahut.png',
      descripcion: 'Pizza grande + bebida',
      direccion: 'Avenida Nile 45',
      precio: 8
    }
  ];

  // ACEPTAR PEDIDO (CON ALERTA PRO)
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
            console.log('Pedido aceptado:', pedido);

            //eliminar de la lista
            this.pedidos = this.pedidos.filter(p => p.id !== pedido.id);

            // this.router.navigateByUrl('/tabs/activos');
          }
        }
      ]
    });

    await alert.present();
  }

}