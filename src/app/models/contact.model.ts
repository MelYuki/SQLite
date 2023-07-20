export interface Contact {
    id?: number
    firstname: string
    lastname: string
    email?: string
    // email: string | null
    favorite: boolean
}

// Avec -> email?: string
// Ce sera OK
// const c: Contact = { firstname: 'Mel', lastname: 'Taï', favorite: false}

// Avec -> email: string | null
// Cela posera un porblème qu'il n'y ait pas d'email
// const c: Contact = { firstname: 'Mel', lastname: 'Taï'}