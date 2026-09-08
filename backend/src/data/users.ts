export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export const users: User[] = [
  {
    id: 1,
    email: "student@test.com",
    password: "123456",
    name: "Student",
  },
];