export class User {
  name: string;
  isAuthenticated: boolean;
  created: number;

  constructor(name: string, isAuthenticated: boolean) {
    this.name = name;
    this.isAuthenticated = isAuthenticated;
    this.created = new Date().getTime();
  }
}
