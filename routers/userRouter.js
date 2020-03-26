import express from "express";
import routes from '../routes';

const userRouter = express.Router();


userRouter.get(routes.users, (req, res) => res.send('user index'));
userRouter.get(routes.change_password, (req, res) => res.send('change password'));
// userRouter.get("/password", (req, res) => res.send('user password'));

export default userRouter;