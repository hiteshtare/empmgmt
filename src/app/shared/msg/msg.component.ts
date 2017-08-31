import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/primeng';
import { NotifyService } from './../notify.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
  msgs: Message[] = [];

  subscription: Subscription;

  constructor(private notifyservice: NotifyService) {

  }

  ngOnInit() {
    this.subscription = this.notifyservice.navItem$.subscribe(item => {
      if (item)
        this.msgs.push(item);
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
