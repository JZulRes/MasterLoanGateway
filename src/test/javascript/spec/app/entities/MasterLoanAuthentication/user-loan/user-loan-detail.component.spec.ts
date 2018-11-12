/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MasterLoanGatewayTestModule } from '../../../../test.module';
import { UserLoanDetailComponent } from 'app/entities/MasterLoanAuthentication/user-loan/user-loan-detail.component';
import { UserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';

describe('Component Tests', () => {
    describe('UserLoan Management Detail Component', () => {
        let comp: UserLoanDetailComponent;
        let fixture: ComponentFixture<UserLoanDetailComponent>;
        const route = ({ data: of({ userLoan: new UserLoan(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [MasterLoanGatewayTestModule],
                declarations: [UserLoanDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(UserLoanDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(UserLoanDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.userLoan).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
