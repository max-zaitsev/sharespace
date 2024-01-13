import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TopBarComponent} from './components/topBar/topBar.component'
import {AppRoutingModule} from '../../../app-routing.module'
import {TuiLinkModule} from '@taiga-ui/core'

@NgModule({
  imports: [CommonModule, AppRoutingModule, TuiLinkModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
