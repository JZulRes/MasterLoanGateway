export interface IUserLoan {
    id?: number;
    cedulaCustomer?: number;
    typeIdCustomer?: string;
    userName?: string;
    password?: string;
}

export class UserLoan implements IUserLoan {
    constructor(
        public id?: number,
        public cedulaCustomer?: number,
        public typeIdCustomer?: string,
        public userName?: string,
        public password?: string
    ) {}
}
