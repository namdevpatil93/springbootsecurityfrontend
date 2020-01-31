import { Injectable } from '@angular/core';
import { IUser } from '../shared/model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';

@Injectable({ providedIn: 'root' })
export class UserService
{
     

    constructor(protected http: HttpClient)
    {

    }
     login(user:IUser) : Observable<any>
     {
         return this.http.post<any>(SERVER_API_URL+"api/authenticate",user)
     }
}