/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { MasterLoanGatewayTestModule } from '../../../../test.module';
import { UserLoanUpdateComponent } from 'app/entities/MasterLoanAuthentication/user-loan/user-loan-update.component';
import { UserLoanService } from 'app/entities/MasterLoanAuthentication/user-loan/user-loan.service';
import { UserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';

describe('Component Tests', () => {
    describe('UserLoan Management Update Component', () => {
        let comp: UserLoanUpdateComponent;
        let fixture: ComponentFixture<UserLoanUpdateComponent>;
        let service: UserLoanService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [MasterLoanGatewayTestModule],
                declarations: [UserLoanUpdateComponent]
            })
                .overrideTemplate(UserLoanUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(UserLoanUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UserLoanService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new UserLoan(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.userLoan = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new UserLoan();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.userLoan = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
