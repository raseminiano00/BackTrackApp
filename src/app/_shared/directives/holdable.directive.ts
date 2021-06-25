import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[appHoldable]'
})
export class HoldableDirective {

  @Output() holdTime: EventEmitter<number> = new EventEmitter();
  state: Subject<string> = new Subject();
  cancel: Observable<string>;

  constructor() { 
    this.cancel = this.state.pipe(
      filter(v => v === 'cancel'),
      tap(v => {
        console.log('stopped');
        this.holdTime.emit(0);
      })
    )
  }

  @HostListener('mouseup',['$event'])
  @HostListener('mouseleave',['$event'])
  endHold() {
    this.state.next('cancel');
    console.log('cancelled');
  }

  @HostListener('mousedown',['$event'])
  hold() {
    console.log('holding');
    this.state.next('start');
    const n = 100;

    interval(n).pipe(
      takeUntil(this.cancel),
      tap(v => {
        this.holdTime.emit(v * n);
        console.log(v*n);
      })
    ).subscribe();
  }

}
