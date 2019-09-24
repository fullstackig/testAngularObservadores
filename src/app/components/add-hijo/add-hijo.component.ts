import { Component, OnInit } from '@angular/core';
import { HijoService } from "../../services/hijo.service";
import { forkJoin, Observable } from "rxjs";

@Component({
  selector: 'app-add-hijo',
  templateUrl: './add-hijo.component.html',
  styleUrls: ['./add-hijo.component.scss']
})
export class AddHijoComponent implements OnInit {

  constructor(private hijoSer: HijoService) { }

  ngOnInit() {

    this.getInitInfo()


  }

  infoa: any
  infob: any
  infoc: any
  preInfoD: any
  infod: any
  ready: boolean = false

  getInitInfo() {
    debugger;
    //Consultar infoa y mostrar en combo
    //Consultar infob y mostrar en combo
    //Consultar infoc y mostrar en combo
    //Consultar preinfo para poder
    //Consultar infod pasando el código que nos devuelven en preinfo y mostrar en combo.
    // Los combos no se pueden visualizar hasta que toda la informaciòn haya sido consultada
    //Add new hijo si infod te permite addColor
    this.getAllInfo().subscribe(res => {
      if (res) {
        this.ready = true
      }
      else {
        alert('hummm, ocurrió un error')
      }
    })
  }

  getAllInfo() {
    const simpleObservable = new Observable((observer) => {

      let devolverResultado = (result: boolean) => {
        observer.next(result)
        observer.complete()
      }

      try {
        let servicea = this.hijoSer.getInfoa()
        let serviceb = this.hijoSer.getInfob()
        let servicec = this.hijoSer.getInfoc()
        let preinfo = this.hijoSer.getPreInfo()

        forkJoin([servicea, serviceb, servicec, preinfo]).subscribe(res => {
          this.infoa = res[0]
          this.infob = res[1]
          this.infoc = res[2]
          this.preInfoD = res[3]

          this.hijoSer.getInfod(this.preInfoD.codeToFindD).subscribe((res: any) => {
            this.infod = res.valores
            devolverResultado(true)
          })
        })
      } catch (error) {
        devolverResultado(false)
      }
    })

    return simpleObservable

  }
}
