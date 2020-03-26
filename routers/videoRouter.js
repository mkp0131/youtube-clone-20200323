import express from "express";
import routes from '../routes';

const videoRouter = express.Router();


videoRouter.get(routes.videos, (req, res) => res.send('video index'));
videoRouter.get(routes.video_detail, (req, res) => res.send(req.params.id + 'video detail'));

export default videoRouter;