const getHomePage = (req, res) => {
    res.render("index", {title:"Home Page"});
}

module.exports = {
    getHomePage
};
