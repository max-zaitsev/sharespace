import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {ILoginRequest} from '../../interfaces/ILoginRequest'
import {ICurrentUser} from '../../../shared/interfaces/ICurrentUser'
import {IBackendErrors} from '../../../shared/interfaces/IBackendErrors'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: ILoginRequest}>(),
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: ICurrentUser}>(),
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: IBackendErrors}>(),
)
