export interface IUser {
  email: string;
  id: string;
  name: string;
  lists: string[];
}

export interface IAuth {
  user: IUser;
  updateUser: (e?: any) => void;
}

export interface IList {
  name: string;
  key: string;
  creatorId: string;
  items: IItem[];
}

export interface IItem {
  content: string;
  posterId: string;
  completed: boolean;
}
