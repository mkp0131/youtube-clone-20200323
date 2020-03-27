import routes from "./routes";

// locals 객체에 변수추가
export const localMiddleware = (req, res, next) => {
	res.locals.siteName = 'YOU2BE';
	res.locals.routes = routes;

	next();
}