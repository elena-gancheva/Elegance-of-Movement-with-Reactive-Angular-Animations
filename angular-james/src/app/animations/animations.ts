import { AnimationMetadata, AnimationReferenceMetadata,AnimationStaggerMetadata, keyframes, animate, animation, useAnimation, sequence, style, query, stagger } from '@angular/animations';

const primary: string = '#673ab7';

export const nextStepAnimation: AnimationMetadata = sequence([
  query('.circle', useAnimation(staggerColorAnimation('200', '800')))
]);

function colorAnimation(time: string): AnimationReferenceMetadata {
  return animation([animate(time + 'ms ease-in', keyframes([
      style({ opacity: '0.2', fill: `${ primary }` }),
      style({ opacity: '1' })
    ]))
  ]);
};

function staggerColorAnimation(staggerTime: string, time: string): AnimationReferenceMetadata {
 return animation([(stagger(
    staggerTime + 'ms', useAnimation(colorAnimation(time))
  ))]);
};
