module.exports.isLoggedIn = (req, res, next) => {
    console.log(req.path, "..",req.originalUrl); 
        if (!req.isAuthenticated()) {
            req.session.originalUrl = req.originalUrl;
            req.flash("error", "You must be logged in to do that!");
            return res.redirect("/login");
        }
        next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.originalUrl) {
        res.locals.redirectUrl = req.session.originalUrl;
    }
    next();
}