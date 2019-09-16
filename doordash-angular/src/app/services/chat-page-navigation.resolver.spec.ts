import { TestBed } from '@angular/core/testing';

import { ChatPageNavigationResolver } from './chat-page-navigation.resolver';

describe('ChatRoomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatPageNavigationResolver = TestBed.get(ChatPageNavigationResolver);
    expect(service).toBeTruthy();
  });
});
