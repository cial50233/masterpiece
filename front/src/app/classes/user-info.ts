export class UserInfo {

  id: number;
  username: string;
  email: string;
  enable: boolean;
  password: string;
  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
  }
}