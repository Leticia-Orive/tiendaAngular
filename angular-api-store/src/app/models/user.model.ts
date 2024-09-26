export interface User {
    id: string;        // Identificador único del usuario
    name: string;      // Nombre del usuario
    email: string;     // Correo electrónico del usuario
    role: 'admin' | 'user'; // Rol del usuario: 'admin' o 'user'
  }