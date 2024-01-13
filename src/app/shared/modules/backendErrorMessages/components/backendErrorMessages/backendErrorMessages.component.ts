import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {IBackendErrors} from '../../../../interfaces/IBackendErrors'

@Component({
  selector: 'ss-backend-error-messages',
  templateUrl: 'backendErrorMessages.component.html',
  styleUrls: ['backendErrorMessages.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: IBackendErrors

  errorMessages!: string[]

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ')
        return `${name} ${messages}`
      },
    )
  }
}
