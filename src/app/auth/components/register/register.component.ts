import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {registerAction} from '../../store/actions/register.action'
import {Observable, of} from 'rxjs'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {IRegisterRequest} from '../../interfaces/IRegisterRequest'
import {IBackendErrors} from '../../../shared/interfaces/IBackendErrors'

@Component({
  selector: 'ss-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]],
    })
  }
  onSubmit() {
    const request: IRegisterRequest = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
