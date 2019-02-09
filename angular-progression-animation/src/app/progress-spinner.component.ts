import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationMetadata } from '@angular/animations';

import { showAnimation, hideAnimation } from './animations/animations';

@Component({
  selector: 'progress-spinner',
  templateUrl: 'progress-spinner.component.html',
  styleUrls: ['progress-spinner.component.css'],
})
export class ProgressSpinnerComponent {
  @Input() public text: string;
  @Input() public loading: boolean;
  @Input() public progress: number;

  @ViewChild('animatedElement') public animatedElement: ElementRef;

  constructor(private builder: AnimationBuilder) {}

  public ngOnChanges(changes: any): void {
    if (changes.loading && !changes.loading.firstChange) {
      this.playAnimation();
    }
  }

  private playerFor(el: ElementRef, animation: AnimationMetadata): AnimationPlayer {
    const factory = this.builder.build(animation);
    return factory.create(el);
  }

  public playAnimation(): void {
    const el = this.animatedElement.nativeElement;
    const animation = this.loading ? hideAnimation : showAnimation;
    const player = this.playerFor(el, animation);

    player.play();
  }
}
