import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IChatRoom, IChatMessage, ChatRoom } from '../models/chat-room';
import { environment } from '../../environments/environment';

const ROOMS_API = `${environment.apiUrl}/api/rooms`;
const POLLING_INTERVAL = 1000;

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( private httpClient: HttpClient ) {
  }

  getChatRooms(): Observable<ChatRoom[]> {
    return this.httpClient.get<IChatRoom[]>(ROOMS_API)
      .pipe(
        map<IChatRoom[], ChatRoom[]>(( data: IChatRoom[] = [] ) => {
          return data.map(room => new ChatRoom(room));
        })
      );
  }

  getChatRoomDetails( roomId: number ): Observable<ChatRoom> {
    return this.httpClient.get<IChatRoom>(`${ROOMS_API}/${roomId}`)
      .pipe(
        map(( room: IChatRoom ) => new ChatRoom(room))
      );
  }

  getChatRoomMessages( roomId: number ): Observable<IChatMessage[]> {
    return this.httpClient.get<IChatMessage[]>(`${ROOMS_API}/${roomId}/messages`);
  }

  pollChatRoomMessages( roomId: number ) {
    return timer(0, POLLING_INTERVAL)
      .pipe(
        switchMap(_ => this.getChatRoomMessages(roomId))
      );
  }

  postMessageInChatRoom( roomId: number, message: string, user: string ) {
    return this.httpClient.post(`${ROOMS_API}/${roomId}/messages`, { name: user, message })
      .pipe(
        catchError(() => of([]))
      );
  }
}
