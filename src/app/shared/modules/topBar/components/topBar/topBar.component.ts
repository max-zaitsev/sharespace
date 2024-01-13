import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {Observable, of} from 'rxjs'
import {ICurrentUser} from '../../../../interfaces/ICurrentUser'
import {select, Store} from '@ngrx/store'
import {
  currentUserSelector,
  isAnonymousInSelector,
  isLoggedInSelector,
} from '../../../../../auth/store/selectors'

@Component({
  selector: 'ss-top-bar',
  templateUrl: 'topBar.component.html',
  styleUrls: ['./topBar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = of(false)
  isAnonymous$: Observable<boolean> = of(true)
  currentUser$: Observable<ICurrentUser | null> = of(null)

  constructor(private store: Store) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousInSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
