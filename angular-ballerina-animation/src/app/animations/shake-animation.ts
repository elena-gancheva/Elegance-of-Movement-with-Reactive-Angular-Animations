import { AnimationBuilder, group, query, style, animate, keyframes } from '@angular/animations';

export const shake = [group([
  query('.st1, .st4:nth-child(2), .st8', animate('1s ease', keyframes([
    style({ transform: 'translate(2px, 1px) rotate(0deg)', offset: 0 }),
    style({ transform: `translate(-1px, -2px) rotate(-2deg)`, offset: 0.1 }),
    style({ transform: `translate(-3px, 0) rotate(3deg)`, offset: 0.2 }),
    style({ transform: `translate(0, 2px) rotate(0deg)`, offset: 0.3 }),
    style({ transform: `translate(1px, -1px) rotate(1deg)`, offset: 0.4 }),
    style({ transform: `translate(-1px, 2px) rotate(-1deg)`, offset: 0.5 }),
    style({ transform: `translate(-3px, 1px) rotate(0deg)`, offset: 0.6 }),
    style({ transform: `translate(2px, 1px) rotate(-2deg)`, offset: 0.7 }),
    style({ transform: `translate(-1px, -1px) rotate(4deg)`, offset: 0.8 }),
    style({ transform: `translate(2px, 2px) rotate(0deg)`, offset: 0.9 }),
    style({ transform: `translate(1px, -2px) rotate(-1deg)`, offset: 1 }),
  ]))),
  query('.st9', animate('500ms ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `translateX(40px)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st7', animate('2s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `scale(0.9)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.whole', animate('2s ease', keyframes([
  style({ transform: '*', offset: 0 }),
  style({ transform: `rotate3d(0, 1, 0, 8deg) skewY(16deg)`, offset: 0.4 }),
  style({ transform: '*', offset: 1 }),
  ])))
])];
