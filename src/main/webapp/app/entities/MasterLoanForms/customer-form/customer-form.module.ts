import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MasterLoanGatewaySharedModule } from 'app/shared';
import {
    CustomerFormComponent,
    CustomerFormDetailComponent,
    CustomerFormUpdateComponent,
    CustomerFormDeletePopupComponent,
    CustomerFormDeleteDialogComponent,
    customerFormRoute,
    customerFormPopupRoute
} from './';

const ENTITY_STATES = [...customerFormRoute, ...customerFormPopupRoute];

@NgModule({
    imports: [MasterLoanGatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CustomerFormComponent,
        CustomerFormDetailComponent,
        CustomerFormUpdateComponent,
        CustomerFormDeleteDialogComponent,
        CustomerFormDeletePopupComponent
    ],
    entryComponents: [
        CustomerFormComponent,
        CustomerFormUpdateComponent,
        CustomerFormDeleteDialogComponent,
        CustomerFormDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterLoanGatewayCustomerFormModule {}
