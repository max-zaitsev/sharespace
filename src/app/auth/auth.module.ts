import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {RouterModule} from '@angular/router'
import {TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/kit'
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core'
import {ReactiveFormsModule} from '@angular/forms'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiInputModule,
    TuiSvgModule,
    TuiInputPasswordModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiLinkModule,
  ],
  declarations: [RegisterComponent],
})
export class AuthModule {}
