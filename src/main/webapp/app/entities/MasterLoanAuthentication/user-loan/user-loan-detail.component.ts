import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';

@Component({
    selector: 'jhi-user-loan-detail',
    templateUrl: './user-loan-detail.component.html'
})
export class UserLoanDetailComponent implements OnInit {
    userLoan: IUserLoan;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ userLoan }) => {
            this.userLoan = userLoan;
        });
    }

    previousState() {
        window.history.back();
    }
}
