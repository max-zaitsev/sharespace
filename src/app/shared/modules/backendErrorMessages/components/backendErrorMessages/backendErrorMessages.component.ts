import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {IBackendErrors} from '../../../../interfaces/IBackendErrors'

@Component({
  selector: 'ss-backend-error-messages',
  templateUrl: 'backendErrorMessages.component.html',
  styleUrls: ['backendErrorMessages.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors!: IBackendErrors

  errorMessages!: string[]

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(', ')
      return `${name} ${messages}`
    })
  }
}
