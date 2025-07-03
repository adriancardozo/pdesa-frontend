import { Role } from '../enum/role.enum';

export type UserResponse = {
  id: string;
  role: Role;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};
