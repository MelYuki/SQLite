import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Contact } from '../models/contact.model';
import { CommonModule } from '@angular/common';
import { DbProvider } from '../services/db-provider';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,
    // Module contenant les éléments de base d'Angular
    CommonModule],
})
export class Tab1Page {

  // contacts: Contact[] = [
  //   {firstname: 'Mel', lastname: 'Taï', favorite: true, email: 'e@mail.be'},
  //   {firstname: 'Yuki', lastname: 'Michi', favorite: false, email: 'f@mail.be'}
  // ]
  contacts: Contact[] = []

  constructor(
    private dbProvider: DbProvider
  ) {
    // dbProvider.getContact().then(contacts => this.contacts = contacts)
  }

  // Même chose qu'un useEffect...
  async ionViewDidEnter() {
    // this.dbProvider.getContact().then(contacts => this.contacts = contacts)
    this.contacts = await this.dbProvider.getContact()
  }

}
