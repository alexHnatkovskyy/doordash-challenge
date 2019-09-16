export interface IChatRoom {
  id: number;
  name: string;
  users: string[];
  messages?: IChatMessage[];
}

export interface IChatMessage {
  name: string;
  message: string;
}

export class ChatRoom implements IChatRoom {
  id: number;
  name: string;
  users: string[] = [];
  messages: IChatMessage[];

  constructor(chatRoom: IChatRoom, messages: IChatMessage[] = []) {
    Object.assign(this, {...chatRoom, messages});
  }
}
