import {Injectable} from '@angular/core'
import {IRegisterRequest} from '../interfaces/IRegisterRequest'
import {ICurrentUser} from '../../shared/interfaces/ICurrentUser'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {map} from 'rxjs/operators'
import {IAuthResponse} from '../interfaces/IAuthResponse'
import {ILoginRequest} from '../interfaces/ILoginRequest'

@Injectable()
export class AuthService {
  getUser(response: IAuthResponse): ICurrentUser {
    return response.user
  }

  constructor(private http: HttpClient) {}
  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser))
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users/login'
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser))
  }
}
