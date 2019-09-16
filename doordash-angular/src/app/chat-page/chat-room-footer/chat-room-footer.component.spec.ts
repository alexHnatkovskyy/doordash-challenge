import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomFooterComponent } from './chat-room-footer.component';

describe('ChatRoomFooterComponent', () => {
  let component: ChatRoomFooterComponent;
  let fixture: ComponentFixture<ChatRoomFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
