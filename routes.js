// Global
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

// Users
const USERS = '/users';
const USERS_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

// Videos
const VIDEOS = '/videos';
const VIDEO_DETAIL = '/:id';
const UPLOAD_VIDEO = '/:id/upload';
const EDIT_VIDEO = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';


const routes = {

	// Global
	home: HOME,
	join: JOIN,
	login: LOGIN,
	logout: LOGOUT,
	search: SEARCH,

	// Users
	users: USERS,
	users_detail: USERS_DETAIL,
	edit_profile: EDIT_PROFILE,
	change_password: CHANGE_PASSWORD,

	// Videos
	videos: VIDEOS,
	video_detail: VIDEO_DETAIL,
	video_upload: UPLOAD_VIDEO,
	edit_video: EDIT_VIDEO,
	delete_video: DELETE_VIDEO

}

export default routes;