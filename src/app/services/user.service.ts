
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http :HttpClient) { 
  }
  register(user: User) { 
    console.log(user)
      return this.http.post(`http://localhost:3000/users/register`,user);
  }


  // getAll() {
  //     return this.http.get<User[]>(`${config.apiUrl}/users`);
  // }
  // signUp(userName: string, email: string,
  //   firstName: string,
  //   lastName: string,
  //   mobile: number,
  //   country: string,
  //   state: string,
  //   city: string,
  //   address: string,
  //   zip: number,
  //   password: string)
  //   : Observable<boolean> {
  //   var signUpObj: User;
  //   signUpObj = { userName: userName, email: email, firstName: firstName, lastName: lastName, mobile: mobile, country: country, state: state, city: city, address: address, zip: zip, password: password };
  //   return this.http.post<boolean>('http://localhost:3000/users/register', signUpObj).pipe(catchError(this.errorHandler));
  // }
  // errorHandler(errorHandler: any): import("rxjs").OperatorFunction<boolean, any> {
  //   throw new Error("Method not implemented.");
  // }

  // delete(id: number) {
  //     return this.http.delete(`${config.apiUrl}/users/${id}`);
  // }
}