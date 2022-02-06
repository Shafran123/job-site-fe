import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/shared/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  public isLoginClicked = false
  public loading = false
  public err = ''

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService : AuthService
  ) { }

  loginUserForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
    this.onChangesLoginForm();
  }

  onChangesLoginForm() {
    this.loginUserForm.valueChanges.subscribe(val => {
      this.err = ''
    })
  }

  onClickLogin() {
    this.isLoginClicked = true
    if (this.loginUserForm.status == 'VALID') {
      this.loading = true;
      this.userService.userLogin(this.loginUserForm.value).then(res => {
        console.log(res);
        this.authService.storeUser(res.user)
        this.authService.storeToken(res.token)
        this.router.navigate(['/dashboard'])
        this.loading = false
      }).catch(err => {
        console.log(err);
        this.loading = false
        this.err = err
      })
    }
  }

  onClickRegister() {

  }
}
