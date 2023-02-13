import { Component } from '@angular/core';
import  * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  proyects = [{
    name: "proyecto 1",
    description: "Descripcion",
    technologies: "angular - Express - OracleDB"
  },
  {
    name: "proyecto 1",
    description: "Descripcion",
    technologies: "angular - Express - OracleDB"
  },
  {
    name: "proyecto 1",
    description: "Descripcion",
    technologies: "angular - Express - OracleDB"
  },
  {
    name: "proyecto 1",
    description: "Descripcion",
    technologies: "angular - Express - OracleDB"
  },
  {
    name: "proyecto 1",
    description: "Descripcion",
    technologies: "angular - Express - OracleDB"
  },
  {
    name: "proyecto 1",
    description: "Descripcion",
    technologies: "angular - Express - OracleDB"
  }]

  ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
}
