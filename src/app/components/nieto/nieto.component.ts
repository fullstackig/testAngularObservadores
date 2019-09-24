import { GlobalService } from './../../services/global.service';
import { Hijo } from './../../models/hijo';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    if (changes["hijoSeleccionado"].previousValue != changes["hijoSeleccionado"].currentValue) {
      debugger;
      setTimeout(() => {
        this.global.setHijo = changes["hijoSeleccionado"].currentValue
      }, 0);
    }
  }

  constructor(private global: GlobalService) { }

  @Input() hijoSeleccionado: Hijo
  ngOnInit() {

  }

  SeleccionarHijo() {
    debugger;
    this.global.setHijo = this.hijoSeleccionado
  }

}
