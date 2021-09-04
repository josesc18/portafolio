import { Injectable } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAllProjects(): Project[] {
    return [
      {
        id: 2,
        title: "Sistema de inventario",
        description: "Desarrollado bajo las tecnologias de Django, bootstrap, JavaScript y html.",
        img: "assets/img/Sistema-de-inventario-2.png"
      },
      {
        id: 3,
        title: "Sistema de ventas e inventario",
        description: "Sistemas diseñado para cubrir las necesidades de este pequeño emprendimiento",
        img: "assets/img/Sistema-de-inventario.png"
      },
    ]
  };
}
