import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IUserLoan } from 'app/shared/model/MasterLoanAuthentication/user-loan.model';

type EntityResponseType = HttpResponse<IUserLoan>;
type EntityArrayResponseType = HttpResponse<IUserLoan[]>;

@Injectable({ providedIn: 'root' })
export class UserLoanService {
    public resourceUrl = SERVER_API_URL + 'masterloanauthentication/api/user-loans';
    public resourceSearchUrl = SERVER_API_URL + 'masterloanauthentication/api/_search/user-loans';

    constructor(private http: HttpClient) {}

    create(userLoan: IUserLoan): Observable<EntityResponseType> {
        return this.http.post<IUserLoan>(this.resourceUrl, userLoan, { observe: 'response' });
    }

    update(userLoan: IUserLoan): Observable<EntityResponseType> {
        return this.http.put<IUserLoan>(this.resourceUrl, userLoan, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IUserLoan>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IUserLoan[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IUserLoan[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
