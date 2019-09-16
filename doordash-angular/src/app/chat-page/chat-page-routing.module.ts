import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ChatPageNavigationResolver } from '../services/chat-page-navigation.resolver';
import { ChatPageComponent } from './chat-page.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

const routes: Routes = [
  {
    path: 'chat',
    component: ChatPageComponent,
    canActivate: [AuthGuard],
    resolve: {
      rooms: ChatPageNavigationResolver
    },
    children: [
      {
        path: ':id',
        component: ChatRoomComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [ChatPageNavigationResolver]
})
export class ChatPageRoutingModule {
}
