import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MasterLoanGatewaySharedModule } from 'app/shared';
import {
    UserauthComponent,
    UserauthDetailComponent,
    UserauthUpdateComponent,
    UserauthDeletePopupComponent,
    UserauthDeleteDialogComponent,
    userauthRoute,
    userauthPopupRoute
} from './';

const ENTITY_STATES = [...userauthRoute, ...userauthPopupRoute];

@NgModule({
    imports: [MasterLoanGatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        UserauthComponent,
        UserauthDetailComponent,
        UserauthUpdateComponent,
        UserauthDeleteDialogComponent,
        UserauthDeletePopupComponent
    ],
    entryComponents: [UserauthComponent, UserauthUpdateComponent, UserauthDeleteDialogComponent, UserauthDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterLoanGatewayUserauthModule {}
