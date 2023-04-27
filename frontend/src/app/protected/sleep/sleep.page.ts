import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-sleep',
  templateUrl: 'sleep.page.html',
  styleUrls: ['sleep.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class SleepPage {
  constructor() {}
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };
}
