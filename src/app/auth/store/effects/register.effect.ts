import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {
  registerAction,
  registerFailuresAction,
  registerSuccessAction,
} from '../actions/register.action'
import {catchError, map, switchMap} from 'rxjs/operators'
import {AuthService} from '../../services/auth.service'
import {ICurrentUser} from '../../../shared/interfaces/ICurrentUser'
import {of} from 'rxjs'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) =>
            registerSuccessAction({currentUser}),
          ),
          catchError(() => {
            return of(registerFailuresAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
