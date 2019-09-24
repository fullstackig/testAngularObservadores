import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hijo } from "../models/hijo";

@Injectable({
  providedIn: 'root'
})
export class HijoService {

  constructor(private http: HttpClient) {

  }

  getTodosHijos() {
    return this.http.get<Hijo[]>("http://localhost:3000/hijo")
  }

  getInfoa() {
    return this.http.get('http://localhost:3000/infoa')
  }

  getInfob() {
    return this.http.get('http://localhost:3000/infob')
  }

  getInfoc() {

    return this.http.get('http://localhost:3000/infoc')

  }

  getPreInfo() {
    return this.http.get('http://localhost:3000/preinfoD')
  }

  getInfod(code: string) {
    return this.http.get(`http://localhost:3000/infoD/${code}`)
  }
}
