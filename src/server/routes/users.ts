import { Router } from 'express';
import { User } from '../mock-data/user';
import { USERS } from '../mock-data/mock-users';

const users: Router = Router();

/* GET users listing. */
users.get('/', function (req: any, res: any, next: any) {
  const usersList: User[] = USERS ;
  res.send(usersList);
});

users.get('/:id', function (req: any, res: any, next: any) {
  const usersList: User[] = USERS ;
  res.send(usersList);
});

export default users;