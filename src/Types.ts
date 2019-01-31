export interface IUser {
  email: string;
  id: string;
  name: string;
}

export interface IAuth {
  user: IUser;
  updateUser: (e?: any) => void;
}
