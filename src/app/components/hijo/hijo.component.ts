import { Hijo } from './../../models/hijo';
import { Component, OnInit } from '@angular/core';
import { HijoService } from "../../services/hijo.service";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  constructor(private hijoService: HijoService) { }

  ngOnInit() {
  }

  lstHijos: Hijo[]
  hijoSeleccionado: Hijo

  consultarInfo() {
    debugger;
    this.hijoService.getTodosHijos().subscribe(res => {
      debugger;
      this.lstHijos = res
    })

  }

  SeleccionarHijo(idHijo) {
    debugger;
    this.hijoSeleccionado = this.lstHijos.filter(x => x.id == idHijo)[0]
  }



}
