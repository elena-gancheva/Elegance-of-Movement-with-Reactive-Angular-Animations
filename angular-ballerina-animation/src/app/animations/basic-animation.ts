import { AnimationBuilder, group, query, style, animate, keyframes } from '@angular/animations';

export const basic = [group([
  query('.st8:nth-child(3)', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `translateY(80px)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st1', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `translateX(-20px)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st7', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `scale(0.95)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st6, .st8', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `rotate(-1deg)`, offset: 0.4 }),
    style({ transform: `rotate(1deg)`, offset: 0.6 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.front-leg', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `rotate3d(0, 1, 0, 6deg) skewX(6deg)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ])))
])];

export const basicNotNatural = [group([
  query('.st8:nth-child(3)', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `translateY(80px)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st1', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `translateX(-20px)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st7', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `scale(0.95)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st6, .st8', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `rotate(-1deg)`, offset: 0.4 }),
    style({ transform: `rotate(1deg)`, offset: 0.6 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.front-leg', animate('1s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `rotate3d(0, 1, 0, 6deg) skewX(46deg)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ])))
])]