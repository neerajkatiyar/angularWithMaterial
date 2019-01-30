import { Directive, OnInit, OnDestroy, Output, EventEmitter, ElementRef } from '@angular/core';
// import {Observable} from 'rxjs';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/do';
import { Observable, of, Subject, Subscription, fromEvent, observable } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, delay, tap } from 'rxjs/operators';

@Directive({
  selector: '[appClickOutside]'
})

export class ClickOutsideDirective implements OnInit, OnDestroy {
  private listening: boolean;
  private globalClick: Observable<MouseEvent>;

  @Output('clickOutside') clickOutside: EventEmitter<Object>;

  constructor(private _elRef: ElementRef) {
    this.listening = false;
    this.clickOutside = new EventEmitter();
  }

  ngOnInit() {
    fromEvent(document, 'click').pipe(
      delay(1), tap(() => {
        this.listening = true;
      })).subscribe((event: MouseEvent) => {
        this.onGlobalClick(event);
      });
  }

  ngOnDestroy() {
    // this.globalClick.unsubscribe();
  }

  onGlobalClick(event: MouseEvent) {
    if (event instanceof MouseEvent && this.listening === true) {
      if (this.isDescendant(this._elRef.nativeElement, event.target) === true) {
        this.clickOutside.emit({
          target: (event.target || null),
          value: false
        });
      } else {
        this.clickOutside.emit({
          target: (event.target || null),
          value: true
        });
      }
    }
  }

  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }
}
