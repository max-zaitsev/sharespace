import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {BackendErrorMessagesComponent} from './components/backendErrorMessages/backendErrorMessages.component'
import {TuiErrorModule} from '@taiga-ui/core'

@NgModule({
  imports: [CommonModule, TuiErrorModule, TuiErrorModule, TuiErrorModule],
  declarations: [BackendErrorMessagesComponent],
  exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}
