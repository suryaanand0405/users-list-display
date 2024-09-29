import { Component, OnInit } from '@angular/core';
import { MenuListService } from '../shared/menu-list.service';
import { UsersService } from '../shared/users.service';
import { Menu } from './models/menu';
import { User } from './models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  menu:Menu[] = [];
  usersList: User[] = [];

  constructor( private menuService: MenuListService, private usersService: UsersService) {

  }
  ngOnInit() {
    this.getMenuList();
   // this.getUsersList();
  }

  getMenuList() {
    this.menuService.getMenu().subscribe( (result:Menu[]) => {
      this.menu = result;
    })
  }

  /* getUsersList() {
    this.usersService.getUsersListFromAPI().subscribe( (response: User[]) => {
    //  this.usersList = response;
      this.usersService.setUserData(response);
    })
  } */

  
  
}
