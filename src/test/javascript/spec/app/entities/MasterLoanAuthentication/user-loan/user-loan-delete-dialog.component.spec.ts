/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { MasterLoanGatewayTestModule } from '../../../../test.module';
import { UserLoanDeleteDialogComponent } from 'app/entities/MasterLoanAuthentication/user-loan/user-loan-delete-dialog.component';
import { UserLoanService } from 'app/entities/MasterLoanAuthentication/user-loan/user-loan.service';

describe('Component Tests', () => {
    describe('UserLoan Management Delete Component', () => {
        let comp: UserLoanDeleteDialogComponent;
        let fixture: ComponentFixture<UserLoanDeleteDialogComponent>;
        let service: UserLoanService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [MasterLoanGatewayTestModule],
                declarations: [UserLoanDeleteDialogComponent]
            })
                .overrideTemplate(UserLoanDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(UserLoanDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UserLoanService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
