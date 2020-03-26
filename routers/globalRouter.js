import express from "express";
import routes from '../routes';

const globalRouter = express.Router();


globalRouter.get(routes.home, (req, res) => res.send('global index'));
globalRouter.get(routes.join, (req, res) => res.send('global join'));
globalRouter.get(routes.login, (req, res) => res.send('global login'));

export default globalRouter;