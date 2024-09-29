import { Component, signal } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { User } from '../home/models/users';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  usersList: any
  displayedColumns: string[] = ['id', 'userName', 'viewButton'];
  dataSource: any;
  selectedUseData: any;
  asecOrder: boolean = false;
  sortAlphabetically: boolean = false;
  panelOpenState = signal(false);
  isLoading$: Observable<boolean>;

  

  limit: number = 10;
  currentPage: number = 1;

  showPrevious: boolean = false;
  showNext: boolean = false;

  userId: number;
  

  constructor(private usersService: UsersService, private spinnerService: SpinnerService) {
    this.isLoading$ = this.spinnerService.getSpinner();
    this.getUserList(this.currentPage, this.limit);
  }

getUserList(currentPage: number, limit: number) {
  this.usersService.getUsersListFromAPI(this.currentPage, this.limit).subscribe( (response) => {    
    this.usersList = response;
    this.sort('desc');
  });
}

viewUserData(data) {
  this.selectedUseData = data;
}

// sort by Id. Initially sorted in descending order.
sort(string) {
  if(string == 'asec') {
    this.asecOrder = true;
    this.usersList = this.usersList.data.sort((a:any,b: any) => a.id-b.id);
    this.dataSource = new MatTableDataSource(this.usersList);    
  } else {
    this.asecOrder = false;
    this.usersList = this.usersList.data.sort((a:any,b: any) => b.id-a.id);
    this.dataSource = new MatTableDataSource(this.usersList);
  }
}

sortByName(string) {
  if(string) {
    this.sortAlphabetically = true;
    this.usersList = this.usersList.sort((a: any,b: any) => {
      if( (a.name).toLowerCase() > (b.name).toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
    this.dataSource = new MatTableDataSource(this.usersList);  
  } else {
    this.sortAlphabetically = false;
    this.usersList = this.usersList.sort((a: any,b: any) => {
      if( (a.name).toLowerCase() < (b.name).toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
    this.dataSource = new MatTableDataSource(this.usersList);  
  }
}

getLimit(data) {
  this.limit = data.limit;
  this.currentPage = data.page;
  console.log(this.limit, this.currentPage);
  this.getUserList(this.currentPage, this.limit);
}

onSearchUserId() {
  const filteredList  = [];
  this.usersService.getUserByuserId(this.userId).subscribe( data => {
    filteredList.push(data);
    this.userId = null;
    this.dataSource = new MatTableDataSource(filteredList);
  }, (error) => {
    this.userId = null;
    alert('no data found')
  })
}

onClear() {
  this.userId = null;
  this.getUserList(this.currentPage, this.limit);
}

}



