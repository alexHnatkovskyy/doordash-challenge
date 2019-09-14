import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doordash-angular';

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get('/api/rooms')
      .subscribe((resp) => {
        console.log('Resp', resp);
      });
  }
}
