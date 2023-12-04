import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {IRegisterRequest} from '../../interfaces/IRegisterRequest'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<IRegisterRequest>(),
)
