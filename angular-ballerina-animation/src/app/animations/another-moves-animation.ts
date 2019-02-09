import { AnimationBuilder, group, query, style, animate, keyframes } from '@angular/animations';

export const anotherMoves = [group([
  query('.st8:nth-child(3)', animate('2s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `translateX(50px)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st1', animate('2s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `rotate3d(0, 0, 1, 10deg)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.xx, .st7', animate('2s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `rotate3d(0, 0, 1, 6deg)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st7', animate('2s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `rotate3d(0, 0, 1, 8deg) scale(0.95)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.st10, .st11, .st6, .st5', animate('2s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `rotate3d(0, 0, 1, 6deg)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.back-leg', animate('2s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `translateY(15px) skewX(-8deg)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
  query('.front-leg', animate('2s ease', keyframes([
    style({ transform: '*', offset: 0 }),
    style({ transform: `translateY(15px)`, offset: 0.4 }),
    style({ transform: '*', offset: 1 }),
  ]))),
])];
