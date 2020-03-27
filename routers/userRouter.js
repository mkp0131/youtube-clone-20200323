import express from "express";
import routes from '../routes';

const userRouter = express.Router();


userRouter.get('/', (req, res) => res.send('users'));
userRouter.get(routes.edit_profile, (req, res) => res.render('editProfile'));
userRouter.get(routes.change_password, (req, res) => res.send('change password'));
// userRouter.get("/password", (req, res) => res.send('user password'));

export default userRouter;