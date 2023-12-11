import {ICurrentUser} from '../../shared/interfaces/ICurrentUser'
import {IBackendErrors} from '../../shared/interfaces/IBackendErrors'

export interface IAuthState {
  isSubmitting: boolean
  currentUser: ICurrentUser | null
  isLoggedIn: boolean | null
  validationErrors: IBackendErrors | null
}
