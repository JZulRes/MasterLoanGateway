import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MasterLoanGatewaySharedModule } from 'app/shared';
import {
    UserLoanComponent,
    UserLoanDetailComponent,
    UserLoanUpdateComponent,
    UserLoanDeletePopupComponent,
    UserLoanDeleteDialogComponent,
    userLoanRoute,
    userLoanPopupRoute
} from './';

const ENTITY_STATES = [...userLoanRoute, ...userLoanPopupRoute];

@NgModule({
    imports: [MasterLoanGatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        UserLoanComponent,
        UserLoanDetailComponent,
        UserLoanUpdateComponent,
        UserLoanDeleteDialogComponent,
        UserLoanDeletePopupComponent
    ],
    entryComponents: [UserLoanComponent, UserLoanUpdateComponent, UserLoanDeleteDialogComponent, UserLoanDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterLoanGatewayUserLoanModule {}
