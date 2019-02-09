import { AnimationMetadata, keyframes, sequence, group, animate, style, query } from '@angular/animations';

const primary = '#673ab7';

export const hideAnimation: AnimationMetadata = sequence([
  query('.arrow', animate('100ms', keyframes([
    style({ opacity: '0.8', offset: 0 }),
    style({ opacity: '0', offset: 1 }),
  ]))),
  query('button', animate('100ms ease-in', keyframes([
    style({ transform: 'scale(0.4)', offset: 0.8 }),
    style({ transform: 'scale(0)', offset: 0.9 }),
    style({ visibility: 'hidden', offset: 1 })
  ])))
])

export const showAnimation: AnimationMetadata = group([
  query('button', animate('500ms ease-out', keyframes([
    style({ visibility: 'visible', offset: 0 }),
    style({ transform: 'scale(0.2)', offset: 0.2 }),
    style({ transform: 'scale(0.6)', offset: 0.4 }),
    style({ transform: 'scale(1)', offset: 0.5 }),
    style({ backgroundColor: `${ primary }`, offset: 1 })
  ]))),
  query('.arrow', animate('100ms', keyframes([
    style({ opacity: '1' })
  ])))
]);
