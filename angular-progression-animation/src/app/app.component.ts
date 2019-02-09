import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';

import { TaskService } from './services/task.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="mat-app-background basic-container">
      <progress-spinner
        [text]="itemsCount"
        [progress]="progress"
        [loading]="progress !== 0"
        (click)="onClick.next()">
      </progress-spinner>
    </div>
  `,
  providers: [TaskService]
})
export class AppComponent implements OnDestroy {
  public progress: number = 0;
  public itemsCount: number = 0;

  public onClick: Subject<any> = new Subject<any>();
  public onClickSubscription: Subscription;

  constructor(private taskService: TaskService) {
    this.onClickSubscription = this.onClick
      .pipe(filter(() => this.progress === 0))
      .subscribe(() => this.startProcess());
  }

  public startProcess(): void {
    this.progress = 1;
    this.taskService.processRequest()
      .pipe(finalize(() => { 
        this.progress = 0;
        this.itemsCount++; 
      }))
      .subscribe((percentsDone: number) => this.progress = percentsDone);
  }

  public ngOnDestroy(): void {
    if (this.onClickSubscription) {
      this.onClickSubscription.unsubscribe();
    }
  }
}
