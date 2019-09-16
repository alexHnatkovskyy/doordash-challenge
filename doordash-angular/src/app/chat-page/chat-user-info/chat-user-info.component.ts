import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { duration, Duration } from 'moment';
import { timer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat-user-info',
  templateUrl: './chat-user-info.component.html',
  styleUrls: ['./chat-user-info.component.scss']
})
export class ChatUserInfoComponent implements OnInit {
  private sessionDurationHandler: Duration = duration('minutes');

  userSessionDuration$ = timer(0, 30000) // update session duration text every 30s
    .pipe(
      switchMap(( count ) => {
        return of(this.sessionDurationHandler.add(30000).humanize());
      })
    );

  userName: string;

  constructor( private sessionService: SessionService ) {
  }

  ngOnInit() {
    this.userName = this.sessionService.user.name;
  }
}
