import { Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, AnimationMetadata, AnimationPlayer } from '@angular/animations';

import { Subscription, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

import { followAnimation, heartsAnimation } from './animations/animations';

@Component({
  selector: 'love-button',
  templateUrl: 'love-button.component.html',
  styleUrls: ['love-button.component.css'],
})
export class LoveButtonComponent {
  constructor(private builder: AnimationBuilder) {}

  private mouseMoveSubscription: Subscription;
  private clickSubscription: Subscription;

  @ViewChild('animationElement') public animationElement: ElementRef;

  public ngAfterViewInit(): void {
    const el = this.animationElement.nativeElement;
    const button = el.querySelector('.love-button');

    this.clickSubscription = fromEvent(button, 'click')
      .pipe(throttleTime(300))
      .subscribe((e: MouseEvent) => {
        this.onClick(e, el);
    });

    this.mouseMoveSubscription = fromEvent(document, 'mousemove')
      .pipe(throttleTime(50))
      .subscribe((e: MouseEvent) => {
        this.rotateEyes(e, el);
    });
  }

  private playerFor(el: Element, animation: AnimationMetadata|AnimationMetadata[]): AnimationPlayer {
    const factory = this.builder.build(animation);
    return factory.create(el);
  }

  private rotateEyes(e: MouseEvent, el: Element): void {
    const rotDegree = this.calculateRotDegree(e, el);

    const player = this.playerFor(el, followAnimation(rotDegree));
    player.play();
  }

  private onClick(e: MouseEvent, el: Element): void {
    const player = this.playerFor(el, heartsAnimation);
    player.play();
  }

  private calculateRotDegree(e: MouseEvent, el: Element): number {
    const eye = document.querySelector('.eye');
    const domRect = eye.getBoundingClientRect();
  
    const x = (domRect.left) + (domRect.width / 2);
    const y = (domRect.top) + (domRect.height / 2);
    const rad = Math.atan2(e.pageX - x, e.pageY - y);
    return (rad * (180 / Math.PI) * -1) + 180;
  }

  public ngOnDestroy(): void {
    if (this.mouseMoveSubscription) {
      this.mouseMoveSubscription.unsubscribe();
    }
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }
}
