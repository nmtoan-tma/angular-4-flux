import { Router } from 'express';
import { User } from '../mock-data/user';
import { USERS } from '../mock-data/mock-users';
import { Request, Response, NextFunction } from 'express';

const login: Router = Router();

login.post('/', (req: Request, res: Response, next: NextFunction) => {
  // handle request here
  console.log(req.body.user.id);
  console.log(req.body.user.name);
  console.log(req.body.user.password);
  res.sendStatus(200);
});

export default login;