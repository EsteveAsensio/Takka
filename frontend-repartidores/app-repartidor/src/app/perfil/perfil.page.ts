import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../shared/header/header.component";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, HeaderComponent]
})
export class PerfilPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }

  fechaHoy : string = '';

  ngOnInit() {
    const hoy = new Date();

    this.fechaHoy = hoy.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  }

  // 👤 PERFIL
  irPerfil() {
    this.router.navigateByUrl('/perfil-detalle');
  }

  // 📦 RESUMEN
  irResumen() {
    this.router.navigateByUrl('/tabs/resumen');
  }

  // 🌙 TEMA
  toggleTema() {
    document.body.classList.toggle('dark-theme');

    // guardar preferencia
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // 🆘 SOPORTE
  async irSoporte() {
    const alert = await this.alertCtrl.create({
      header: 'Soporte',
      message: '¿En qué podemos ayudarle?',
      buttons: [
        {
          text: '📧 Contactar soporte',
          handler: () => {
            console.log('Abrir email soporte');
            // luego puedes abrir email real
          }
        },
        {
          text: '⚠️ Reportar problema',
          handler: () => {
            //this.reportarProblema(); //Enviar mensaje a correo, más adelante
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  // 🚪 LOGOUT
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/inicio');
  }
}
