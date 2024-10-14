export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole | UserRole[];
}

export type UserRole = 'ADMIN' | 'USER' | 'INTERN';
