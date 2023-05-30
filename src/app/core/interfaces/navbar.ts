export interface Navbar {
    rutas: { nombre: string; url: string; class: string; ancla: boolean }[];
    botones: {
      nombre: string;
      url: string;
      classLI: string;
      classBtn?: string;
      img?: string;
    }[];
    home: boolean;
  }
  