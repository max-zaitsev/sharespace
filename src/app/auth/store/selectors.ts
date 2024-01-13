import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IAuthState} from '../interfaces/IAuthState'

export const authFeatureSelector = createFeatureSelector<IAuthState>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors,
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn,
)

export const isAnonymousInSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn === false,
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser,
)
