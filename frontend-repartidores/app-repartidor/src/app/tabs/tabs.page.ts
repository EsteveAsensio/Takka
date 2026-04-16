import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { statsChart, list, bicycle, person, volumeHigh } from 'ionicons/icons';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [RouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonButton],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
   soundOn = true;
  constructor() {
    addIcons({ volumeHigh, statsChart, list, bicycle, person });
  }
}
