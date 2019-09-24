import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Hijo } from '../models/hijo';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _hijo: Subject<Hijo>
  public hijoObserver: Observable<Hijo>

  constructor() {
    this._hijo = new Subject<Hijo>()
    this.hijoObserver = this._hijo.asObservable()
  }

  public set setHijo(newValue: Hijo) {
    this._hijo.next(newValue)
  }
}
