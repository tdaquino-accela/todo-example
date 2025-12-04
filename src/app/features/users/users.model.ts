export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface FetchUsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}