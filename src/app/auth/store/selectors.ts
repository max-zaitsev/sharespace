import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IAuthState} from '../interfaces/IAuthState'

export const authFeatureSelector = createFeatureSelector<IAuthState>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting,
)
