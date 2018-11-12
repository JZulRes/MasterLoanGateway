import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';
import { UserLoanService } from './user-loan.service';
import { UserLoanComponent } from './user-loan.component';
import { UserLoanDetailComponent } from './user-loan-detail.component';
import { UserLoanUpdateComponent } from './user-loan-update.component';
import { UserLoanDeletePopupComponent } from './user-loan-delete-dialog.component';
import { IUserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';

@Injectable({ providedIn: 'root' })
export class UserLoanResolve implements Resolve<IUserLoan> {
    constructor(private service: UserLoanService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserLoan> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<UserLoan>) => response.ok),
                map((userLoan: HttpResponse<UserLoan>) => userLoan.body)
            );
        }
        return of(new UserLoan());
    }
}

export const userLoanRoute: Routes = [
    {
        path: 'user-loan',
        component: UserLoanComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserLoans'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'user-loan/:id/view',
        component: UserLoanDetailComponent,
        resolve: {
            userLoan: UserLoanResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserLoans'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'user-loan/new',
        component: UserLoanUpdateComponent,
        resolve: {
            userLoan: UserLoanResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserLoans'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'user-loan/:id/edit',
        component: UserLoanUpdateComponent,
        resolve: {
            userLoan: UserLoanResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserLoans'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const userLoanPopupRoute: Routes = [
    {
        path: 'user-loan/:id/delete',
        component: UserLoanDeletePopupComponent,
        resolve: {
            userLoan: UserLoanResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserLoans'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
