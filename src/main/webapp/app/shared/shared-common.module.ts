import { NgModule } from '@angular/core';

import { MasterLoanGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MasterLoanGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MasterLoanGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MasterLoanGatewaySharedCommonModule {}
