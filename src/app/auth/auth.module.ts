import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {RouterModule} from '@angular/router'
import {TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/kit'
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiSvgModule,
    TuiInputPasswordModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiLinkModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
  ],
})
export class AuthModule {}
