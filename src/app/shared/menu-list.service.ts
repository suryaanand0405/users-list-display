import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../home/models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor() { }

  getMenu(): Observable<Menu[]> {
    return of([
      { id: 1, name: 'Users List', link: ['/users-list'] },
    //  { id: 2, name: 'Users Information', link: ['/users-info'] }
    ])
  }

}
