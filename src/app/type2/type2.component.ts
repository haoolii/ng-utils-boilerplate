import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-type2',
  templateUrl: './type2.component.html',
  styleUrls: ['./type2.component.scss']
})
export class Type2Component implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {}
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches)
  );

  ngOnInit(): void {
  }

}
