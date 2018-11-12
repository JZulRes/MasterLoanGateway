import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IUserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';
import { Principal } from 'app/core';
import { UserLoanService } from './user-loan.service';

@Component({
    selector: 'jhi-user-loan',
    templateUrl: './user-loan.component.html'
})
export class UserLoanComponent implements OnInit, OnDestroy {
    userLoans: IUserLoan[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private userLoanService: UserLoanService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private activatedRoute: ActivatedRoute,
        private principal: Principal
    ) {
        this.currentSearch =
            this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search']
                ? this.activatedRoute.snapshot.params['search']
                : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.userLoanService
                .search({
                    query: this.currentSearch
                })
                .subscribe(
                    (res: HttpResponse<IUserLoan[]>) => (this.userLoans = res.body),
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
        }
        this.userLoanService.query().subscribe(
            (res: HttpResponse<IUserLoan[]>) => {
                this.userLoans = res.body;
                this.currentSearch = '';
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInUserLoans();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IUserLoan) {
        return item.id;
    }

    registerChangeInUserLoans() {
        this.eventSubscriber = this.eventManager.subscribe('userLoanListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
