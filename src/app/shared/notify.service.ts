import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Message } from 'primeng/primeng';

@Injectable()
export class NotifyService {

  // Observable navItem source
  private _navItemSource = new BehaviorSubject<Message>('');
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  toastMessage(severity, summary, detail) {
    var message = {
      severity: severity, summary: summary, detail: detail
    };
    this._navItemSource.next(message);
  }

}
