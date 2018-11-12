import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IUserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';
import { UserLoanService } from './user-loan.service';

@Component({
    selector: 'jhi-user-loan-delete-dialog',
    templateUrl: './user-loan-delete-dialog.component.html'
})
export class UserLoanDeleteDialogComponent {
    userLoan: IUserLoan;

    constructor(private userLoanService: UserLoanService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.userLoanService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'userLoanListModification',
                content: 'Deleted an userLoan'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-user-loan-delete-popup',
    template: ''
})
export class UserLoanDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ userLoan }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(UserLoanDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.userLoan = userLoan;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
