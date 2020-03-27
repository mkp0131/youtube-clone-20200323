export const home = (req, res) => res.render('home', {pageTitle: "Home"});

export const search = (req, res) => {
	const {
		query: {
			k: searchTerm
		}
	} = req;
	console.log('', searchTerm);
	res.render('search', {searchTerm});
}