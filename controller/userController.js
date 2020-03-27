export const join = (req, res) => res.send('global join');
export const login = (req, res) => res.send('global login');
export const logout = (req, res) => res.send('global logout');

export const search = (req, res) => {
	res.render('search', {search: req.query.k});
}