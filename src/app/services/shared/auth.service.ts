import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(<any>localStorage.getItem('userData')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public storeUser(userData: any) {
    localStorage.setItem('userData', JSON.stringify(userData));
    this.currentUserSubject.next(userData);
  }

  public storeToken(UserToken : any){
    localStorage.setItem('currentUser', JSON.stringify(UserToken));
    //this.currentUserSubject.next(UserToken);
  }

  public getToken() {
    return JSON.parse(<any>localStorage.getItem('currentUser'));
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
