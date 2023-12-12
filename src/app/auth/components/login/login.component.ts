import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable, of} from 'rxjs'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {ILoginRequest} from '../../interfaces/ILoginRequest'
import {IBackendErrors} from '../../../shared/interfaces/IBackendErrors'
import {loginAction} from '../../store/actions/login.action'

@Component({
  selector: 'ss-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<IBackendErrors | null>

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]],
    })
  }
  onSubmit() {
    const request: ILoginRequest = {
      user: this.form.value,
    }
    this.store.dispatch(loginAction({request}))
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
