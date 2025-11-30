import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => { res.send({title: "READ all users"}) });
userRouter.get('/:id', (req, res) => { res.send({title: "READ a single user"}) });
userRouter.post('/', (req, res) => { res.send({title: "CREATE all users"}) });
userRouter.put('/:id', (req, res) => { res.send({title: " UPDATE a user's data"}) });
userRouter.delete('/:id', (req, res) => { res.send({title: "DELETE a user"}) });

export default userRouter;