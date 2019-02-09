import { Component, ViewChild, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationMetadata } from '@angular/animations';

import { basic, basicNotNatural } from './animations/basic-animation';
import { anotherMoves } from './animations/another-moves-animation';
import { shake } from './animations/shake-animation';
import { rotate } from './animations/rotate-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public animations = ['Basic Practice', 'Another Moves', 'Shake it', 'Rotate'];
  public animationType = '';

  @ViewChild('animationElement') public animationElement: ElementRef;

  constructor(private builder: AnimationBuilder) {}

  public showAnimation(event): void {
    this.animationType = event.target.innerText.toLowerCase();
    const el = this.animationElement.nativeElement;

    switch (this.animationType) {
      case 'basic practice':
      // basicNotNatural
      return this.dance(el, basicNotNatural);
      case 'another moves':
      return this.dance(el, anotherMoves);
      case 'shake it':
      return this.dance(el, shake);
      case 'rotate':
      return this.dance(el, rotate);
      default: return;
    }
  }

  private dance(el: Element, animation: AnimationMetadata|AnimationMetadata[]): void {
    const player = this.playerFor(el, animation);
    player.play();
  }

  private playerFor(el: Element, animation: AnimationMetadata|AnimationMetadata[]): AnimationPlayer {
    const factory = this.builder.build(animation);
    return factory.create(el);
  }
}
