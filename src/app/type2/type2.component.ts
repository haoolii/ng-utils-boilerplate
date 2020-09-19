import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { animateText, onSideNavChange, onMainContentChange} from './animations';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-type2',
  templateUrl: './type2.component.html',
  styleUrls: ['./type2.component.scss'],
  animations: [animateText, onSideNavChange, onMainContentChange]
})
export class Type2Component implements OnInit {
  state = true;
  linkText = false;

  pages: Page[] = [
    {name: 'Inbox', link: 'some-link', icon: 'inbox'},
    {name: 'Starred', link: 'some-link', icon: 'star'},
    {name: 'Send email', link: 'some-link', icon: 'send'},
  ]
  constructor(private breakpointObserver: BreakpointObserver) {}
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches)
  );

  ngOnInit(): void {
  }

  toggle() {
    this.state = !this.state;
  }

  // onSinenavToggle() {
  //   this.sideNavState = !this.sideNavState
  //   setTimeout(() => {
  //     this.linkText = this.sideNavState;
  //   }, 200)
  //   this._sidenavService.sideNavState$.next(this.sideNavState)
  // }

}
