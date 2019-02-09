import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class TaskService {
  constructor() {}

  private progress$: Observable<number> = interval(200)
  .pipe(take(10),
    map(x => (x + 1) * 10)
  );

  public processRequest(): Observable<number> {
    return this.progress$;
  }
}