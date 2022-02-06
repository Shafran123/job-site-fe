import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { AuthService } from './../services/shared/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        console.log(currentUser, 'currentUser ', )
        let returnUrl =  this.router.url;
        if (currentUser) {
            const userRole = currentUser.user_role
            // logged in so return true
            const roles  = route.data['roles']  as Array<string>;
            console.log(userRole, 'currentUser route', roles)

            if (roles && roles.length > 0) {
                
                const found = roles.filter(a => a === userRole);
                if (found && found.length > 0) {
                    return true;
                } else {
                    this.router.navigate(['']);
                    return false;
                }
            }
            return true;

            
            // this.router.navigate([returnUrl]);
            // console.log(currentUser, 'currentUser')
            // return true;

          

        } else {
            console.log(currentUser, 'currentUser')
            // not logged in so redirect to login page with the return url
            this.router.navigate(['login'], );
            return false;
        }

    }
}
