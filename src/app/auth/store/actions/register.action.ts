import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {IRegisterRequest} from '../../interfaces/IRegisterRequest'
import {ICurrentUser} from '../../../shared/interfaces/ICurrentUser'
import {IBackendErrors} from '../../../shared/interfaces/IBackendErrors'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: IRegisterRequest}>(),
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: ICurrentUser}>(),
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: IBackendErrors}>(),
)
