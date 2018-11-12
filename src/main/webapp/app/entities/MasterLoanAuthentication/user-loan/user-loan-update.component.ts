import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';
import { UserLoanService } from './user-loan.service';

@Component({
    selector: 'jhi-user-loan-update',
    templateUrl: './user-loan-update.component.html'
})
export class UserLoanUpdateComponent implements OnInit {
    userLoan: IUserLoan;
    isSaving: boolean;

    constructor(private userLoanService: UserLoanService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ userLoan }) => {
            this.userLoan = userLoan;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.userLoan.id !== undefined) {
            this.subscribeToSaveResponse(this.userLoanService.update(this.userLoan));
        } else {
            this.subscribeToSaveResponse(this.userLoanService.create(this.userLoan));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IUserLoan>>) {
        result.subscribe((res: HttpResponse<IUserLoan>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
