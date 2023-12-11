import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {IRegisterRequest} from '../../interfaces/IRegisterRequest'
import {ICurrentUser} from '../../../shared/interfaces/ICurrentUser'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: IRegisterRequest}>(),
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: ICurrentUser}>(),
)

export const registerFailuresAction = createAction(ActionTypes.REGISTER_FAILURE)
