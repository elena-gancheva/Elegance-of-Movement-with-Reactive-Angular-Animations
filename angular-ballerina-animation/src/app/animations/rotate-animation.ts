import { AnimationBuilder, group, query, style, animate, keyframes } from '@angular/animations';

export const rotate = [group([
  query('.whole', animate('3s ease-in', keyframes([
      style({ transform: '*', offset: 0 }),
      style({ transform: `rotateY(90deg)`, offset: 0.12 }),
      style({ transform: `rotateY(270deg)`, offset: 0.27 }),
      style({ transform: `rotateY(360deg)`, offset: 0.5 }),
      style({ transform: `rotateY(90deg)`, offset: 0.62 }),
      style({ transform: `rotateY(180deg)`, offset: 0.75 }),
      style({ transform: `rotateY(270deg)`, offset: 0.87 }),
      style({ transform: `rotateY(360deg)`, offset: 1 }),
    ]))
  )
])];