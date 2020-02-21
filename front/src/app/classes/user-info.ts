export class UserInfo {
  //  role: string;
  //  username: string;
 //   email: string;
 //   civility: string;
 //   firstName: string;
 //   lastName: string;
 //   dateOfBirth: Date;
 //   pwd: string;
 //   confirPwd: string;
 //   streetNumber: number;
 //   street: string;
  //  town: string;
  //  zipCode: number;
  //  country: string;
  id: number;
  //username: string;
  email: string;
  password: string;
  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
  }
}