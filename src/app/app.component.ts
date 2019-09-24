import { Hijo } from './models/hijo';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from "./services/global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'testAngular';
  aprendiz: string = ''
  visible = true

  info: any
  infoCar: any
  hijo: Hijo
  color: string

  constructor(private global: GlobalService) {

  }

  ngOnInit(): void {
    this.global.hijoObserver.subscribe((hijo: Hijo) => {
      debugger;
      this.hijo = hijo
    })
  }

  mostrarInfo() {
    // Se hace algo aquí y da resultados.
    this.info = { "glossary": { "title": "example glossary", "GlossDiv": { "title": "S", "GlossList": { "GlossEntry": { "ID": "SGML", "SortAs": "SGML", "GlossTerm": "Standard Generalized Markup Language", "Acronym": "SGML", "Abbrev": "ISO 8879:1986", "GlossDef": { "para": "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso": ["GML", "XML"] }, "GlossSee": "markup" } } } } }
  }


  CargarInfoCar() {
    this.infoCar = {
      "name": "John",
      "age": 30,
      "cars": [
        { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
        { "name": "BMW", "models": ["320", "X3", "X5"] },
        { "name": "Fiat", "models": ["500", "Panda"] }
      ]
    }
  }
}
