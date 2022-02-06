import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser_Role : any;
  constructor(
    private authenticationService : AuthService
  ) { }

  ngOnInit(): void {
    this.currentUser_Role = this.authenticationService.currentUserValue.user_role;
  }

}
