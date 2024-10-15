export class UserC {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRoleT[];
}

export type UserRoleT = keyof typeof UserRoleE;

export enum UserRoleE {
  ADMIN,
  USER,
  INTERN
}
