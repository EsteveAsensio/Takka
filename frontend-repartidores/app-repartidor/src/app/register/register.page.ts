import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonLabel, IonItem, IonInput, IonButton, IonHeader, IonButtons, IonToolbar, IonBackButton, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonInput, IonButton, IonHeader, IonButtons, IonToolbar, IonBackButton, IonTitle]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
