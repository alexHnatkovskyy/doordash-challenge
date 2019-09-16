import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomConversationComponent } from './chat-room-conversation.component';

describe('ChatRoomConversationComponent', () => {
  let component: ChatRoomConversationComponent;
  let fixture: ComponentFixture<ChatRoomConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
