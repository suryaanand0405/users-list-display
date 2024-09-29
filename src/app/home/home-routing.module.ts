import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UsersInfoComponent } from '../users-info/users-info.component';
import { UsersListComponent } from '../users-list/users-list.component';

const routes: Routes = [

    {path: '', redirectTo: 'users-list', pathMatch: 'full'},
    { path: 'users-list', component: UsersListComponent },
    { path: 'users-info', component: UsersInfoComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
