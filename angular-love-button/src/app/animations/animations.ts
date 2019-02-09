import { AnimationMetadata, keyframes, animate, style, query, stagger } from '@angular/animations';

export function followAnimation(rot: number): AnimationMetadata {
  return query('.eye', animate('1ms',
    style({ transform: 'rotate(' + rot + 'deg)' })
  ))
}; 

export const heartsAnimation: AnimationMetadata[] = [
  query('.eye-iris',
    animate('300ms ease-out', keyframes([
      style({ background: 'salmon', opacity: '0.9' }),
      style({ transform: 'scale(1.1)' }),
      style({ transform: 'scale(1)', opacity: '0' })
    ]))),
  query('.heart', stagger(300,
    animate('800ms', keyframes([
      style({ opacity: '0.9' }),
      style({ transform: 'scale(1.1)' }),
      style({ transform: 'scale(1)', opacity: '1' })
    ])))),
  query('.heart', stagger(100,
    animate('200ms', keyframes([
      style({ opacity: '0.8' }),
      style({ opacity: '0.5' }),
      style({ opacity: '0.3' }),
      style({ opacity: '0' })
    ])))),
  query('.eye-iris',
    animate('300ms', keyframes([
      style({ opacity: '0.8' }),
      style({ opacity: '0.9' }),
      style({ background: 'black', opacity: '1' })
    ]))
  )
];