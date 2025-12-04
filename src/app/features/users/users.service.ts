import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { FetchUsersResponse, User } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<FetchUsersResponse> {
    return this.http.get<FetchUsersResponse>(this.apiUrl).pipe(
      delay(2000),
      map((response: FetchUsersResponse) => {
        return {
          ...response,
          users: response.users.map((user: User) => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          })),
        };
      })
    );
  }

  getUserById(userId: string): Observable<User | undefined> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`).pipe(
      map((user: User) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }))
    );
  }
}
