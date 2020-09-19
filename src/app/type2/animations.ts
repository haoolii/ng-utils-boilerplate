import { trigger, state, style, transition, animate, animateChild, query } from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'max-width': '60px'
    })
  ),
  state('open',
    style({
      'max-width': '200px'
    })
  ),
  transition('close => open', animate('200ms ease-in')),
  transition('open => close', animate('200ms ease-in')),
]);


export const animateText = trigger('animateText', [
  state('hide',
    style({
      // display: 'none',
      // marginLeft: '10px',
      opacity: 0,
    })
  ),
  state('show',
    style({
      // display: 'block',
      // marginLeft: '100px',
      opacity: 1,
    })
  ),
  transition('hide => show', animate('500ms ease-in')),
  transition('show => hide', animate('500ms ease-out')),
]);

export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '62px'
    })
  ),
  state('open',
    style({
      'margin-left': '200px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);
