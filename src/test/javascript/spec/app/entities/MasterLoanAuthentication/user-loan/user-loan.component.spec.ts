/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { MasterLoanGatewayTestModule } from '../../../../test.module';
import { UserLoanComponent } from 'app/entities/MasterLoanAuthentication/user-loan/user-loan.component';
import { UserLoanService } from 'app/entities/MasterLoanAuthentication/user-loan/user-loan.service';
import { UserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';

describe('Component Tests', () => {
    describe('UserLoan Management Component', () => {
        let comp: UserLoanComponent;
        let fixture: ComponentFixture<UserLoanComponent>;
        let service: UserLoanService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [MasterLoanGatewayTestModule],
                declarations: [UserLoanComponent],
                providers: []
            })
                .overrideTemplate(UserLoanComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(UserLoanComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UserLoanService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new UserLoan(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.userLoans[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
