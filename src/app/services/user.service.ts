import { Injectable } from '@angular/core';
import { ApiService } from './shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api : ApiService
  ) { }

  public userLogin(data: any,): Promise<any> {
    var rtn = this.api.post(`user/login-user` , data  , 'base').toPromise();
    return rtn;
  }
}
