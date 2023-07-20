import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Contact } from "../models/contact.model";

@Injectable({ providedIn: 'root' })
export class DbProvider {

    connect!: SQLiteObject

    constructor(private sqlite: SQLite) { 
    }

     async init() {
        this.connect = await this.sqlite.create({
            // Création de la db
            name: 'data.db',
            // Définir l'emplacement du fichier
            location: 'default'
        })

        this.connect.executeSql(`
            CREATE TABLE IF NOT EXISTS Contact(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                lastName VARCHAR(50) NOT NULL,
                firstName VARCHAR(50) NOT NULL,
                email VARCHAR(255) NULL,
                favorite TINYINT NOT NULL DEFAULT 0
            )
        `, []);
    }

    async getContact() {
        const result = await this.connect.executeSql(`
            SELECT * FROM Contact
        `, [])

        const contacts: Contact[] = []

        for (let i = 0; i < result.rows.length; i++) {
            contacts.push(result.rows.items(i))
        }
        return contacts.sort( (c1, c2) => c1.lastname.localeCompare(c2.lastname))
    }
}