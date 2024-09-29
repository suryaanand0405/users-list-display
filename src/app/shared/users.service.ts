import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../home/models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userData = new BehaviorSubject<User[]>([]);
  userData$ = this.userData.asObservable();

  constructor(private http: HttpClient) { }

  getUsersListFromAPI(currentPage, limit): Observable<User[]> {
    return this.http.get<User[]>(`https://gorest.co.in/public-api/users?page=${currentPage}&per_page=${limit}`);
  }

  getUserByuserId(userId: number) {
    return this.http.get(`https://gorest.co.in/public/v2/users/${userId}`);
  }

  setUserData(data) {
    this.userData.next(data.data);
  }

  getUserData() {
    return this.userData$;
  }

}
