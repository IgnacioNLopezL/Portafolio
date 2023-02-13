import { Component } from '@angular/core';

interface Irow{
  row1: Iskill[];
  row2: Iskill[];
  row3: Iskill[];
}
interface Iskill{
  name: string;
  level: string
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills : Irow[]= [{
    row1: [
      {
        name: "JavaScript",
        level: "Avanzado"
      },
      {
        name: "TypeScript",
        level: "Avanzado"
      },
      {
        name: "SQL",
        level: "intermedio"
      },
    ],
    row2: [{
      name: "Java",
      level: "intermedio"
    },
    {
      name: "Python",
      level: "intermedio"
    },
    {
      name: "C",
      level: "intermedio"
    }],
    row3: [
      {
        name: "C++",
        level: "básico"
      },
      {
        name: "PHP",
        level: "básico"
      },
      {
        name: "",
        level: ""
      },
    ]
  }]
  skillsTolls : Irow[]= [{
    row1: [
      {
        name: "Angular",
        level: "avanzado"
      },
      {
        name: "NodeJS",
        level: "avanzado"
      },
      {
        name: "Ionic",
        level: "intermedio"
      },
    ],
    row2: [{
      name: "Git",
      level: "intermedio"
    },
    {
      name: "Bash",
      level: "intermedio"
    },
    {
      name: "Bootstrap",
      level: "intermedio"
    }],
    row3: [
      {
        name: "Mysql",
        level: "intermedio"
      },
      {
        name: "Jira",
        level: "intermedio"
      },
      {
        name: "",
        level: ""
      },
    ]
  }]
  ablilitiesSoft = [{
    row1: [
      {
        name: "Trabajo en Equipo",
      },
      {
        name: "Aprendizaje Autónomo",
      }
    ],
    row2: [
      {
        name: "Adaptabilidad",
      },
      {
        name: "Flexibilidad",
      }
    ],
    row3: [
      {
        name: "Determinación",
      },
      {
        name: "Autocontrol",
      }
    ],
    row4: [
      {
        name: "Tolerancia al estrés",
      },
      {
        name: "",
      },
    ],
  }]
}
