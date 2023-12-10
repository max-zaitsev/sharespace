import {Injectable} from '@angular/core'
import {IRegisterRequest} from '../interfaces/IRegisterRequest'
import {ICurrentUser} from '../../shared/interfaces/ICurrentUser'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {map} from 'rxjs/operators'
import {IAuthResponse} from '../interfaces/IAuthResponse'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user'
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((response: IAuthResponse) => response.user))
  }
}
