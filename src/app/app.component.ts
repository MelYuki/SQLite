import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DbProvider } from './services/db-provider';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: [SQLite, DbProvider]
})

export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    private dbProvider: DbProvider
  ) {
    dbProvider.init();
  }
}
