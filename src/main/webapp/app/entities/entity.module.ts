import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MasterLoanGatewayCustomerModule as MasterLoanFormsCustomerModule } from './MasterLoanForms/customer/customer.module';
import { MasterLoanGatewayAnswerModule as MasterLoanFormsAnswerModule } from './MasterLoanForms/answer/answer.module';
import { MasterLoanGatewayFormQuestionModule as MasterLoanFormsFormQuestionModule } from './MasterLoanForms/form-question/form-question.module';
import { MasterLoanGatewayCustomerFormModule as MasterLoanFormsCustomerFormModule } from './MasterLoanForms/customer-form/customer-form.module';
import { MasterLoanGatewayLoanModule as MasterLoanFormsLoanModule } from './MasterLoanForms/loan/loan.module';
import { MasterLoanGatewayLoanFeeModule as MasterLoanFormsLoanFeeModule } from './MasterLoanForms/loan-fee/loan-fee.module';
import { MasterLoanGatewayQuestionModule as MasterLoanFormsQuestionModule } from './MasterLoanForms/question/question.module';
import { MasterLoanGatewayUserloanModule as MasterLoanAuthenticationUserloanModule } from './MasterLoanAuthentication/userloan/userloan.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MasterLoanFormsCustomerModule,
        MasterLoanFormsAnswerModule,
        MasterLoanFormsFormQuestionModule,
        MasterLoanFormsCustomerFormModule,
        MasterLoanFormsLoanModule,
        MasterLoanFormsLoanFeeModule,
        MasterLoanFormsQuestionModule,
        MasterLoanAuthenticationUserloanModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterLoanGatewayEntityModule {}
