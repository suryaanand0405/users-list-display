import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loadSpinner = new BehaviorSubject<boolean>(true);
  loadSpinner$ = this.loadSpinner.asObservable();

  constructor() { }

  setSpinner(value: boolean) {
    this.loadSpinner.next(value);
  }

  getSpinner() {
    return this.loadSpinner$;
  }
}
