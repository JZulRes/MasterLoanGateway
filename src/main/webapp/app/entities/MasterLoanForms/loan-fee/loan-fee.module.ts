import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MasterLoanGatewaySharedModule } from 'app/shared';
import {
    LoanFeeComponent,
    LoanFeeDetailComponent,
    LoanFeeUpdateComponent,
    LoanFeeDeletePopupComponent,
    LoanFeeDeleteDialogComponent,
    loanFeeRoute,
    loanFeePopupRoute
} from './';

const ENTITY_STATES = [...loanFeeRoute, ...loanFeePopupRoute];

@NgModule({
    imports: [MasterLoanGatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        LoanFeeComponent,
        LoanFeeDetailComponent,
        LoanFeeUpdateComponent,
        LoanFeeDeleteDialogComponent,
        LoanFeeDeletePopupComponent
    ],
    entryComponents: [LoanFeeComponent, LoanFeeUpdateComponent, LoanFeeDeleteDialogComponent, LoanFeeDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterLoanGatewayLoanFeeModule {}
