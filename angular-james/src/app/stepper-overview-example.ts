import { Component, ViewChild, OnInit } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationMetadata } from '@angular/animations';
import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent, CdkStepper } from '@angular/cdk/stepper';;

import { nextStepAnimation } from './animations/animations';
import { steps } from './steps';

@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrls: ['stepper-overview-example.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }]
})
export class StepperOverviewExample implements OnInit {
  constructor(private builder: AnimationBuilder) {}

  @ViewChild('stepper') private stepper: CdkStepper ;

  public current: number = 0;
  public steps: any;
  private lastStepIndex: number = 4;

  public ngOnInit(): void {
    this.steps = steps;
  }

  public onSelChange(e: StepperSelectionEvent) {
    this.current = e.selectedIndex;
  }

  public resetStepper(): void {
    this.stepper.reset(); 
  }

  public animateNext(): void {
    if (this.current === this.lastStepIndex) { return; }
    const el = document.getElementById(this.current.toString());

    const player = this.playerFor(nextStepAnimation, el);
    player.play();
  }

  private playerFor(animation: AnimationMetadata, el: Element): AnimationPlayer {
    const factory = this.builder.build(animation);
    return factory.create(el);
  }
}