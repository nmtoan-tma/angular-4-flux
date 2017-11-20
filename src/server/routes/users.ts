import { Router } from 'express';
import { User } from '../mock-data/user';
import { USERS } from '../mock-data/mock-users';
import { Request, Response, NextFunction } from 'express';

const users: Router = Router();

/* GET users listing. */
users.get('/', function (req: Request, res: Response, next: NextFunction) {
  const usersList: User[] = USERS;
  res.send(usersList);
});

users.get('/:id', function (req: Request, res: Response, next: NextFunction) {
  for (let user of USERS) {
    let id = parseInt(req.url.replace('/', ''), 10);
    if (id === user.id) {
      res.send(user);
    }
  }
  console.log(req.url.replace('/', ''));
});

users.post('/', (req: Request, res: Response, next: NextFunction) => {
  // handle request here
  res.sendStatus(200);
});

export default users;