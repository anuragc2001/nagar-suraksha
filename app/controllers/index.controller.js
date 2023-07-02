const getHomePage = (req, res) => {
    res.render('index', {title: 'Welcome to Complaint Management System'});
}

const getLoginPage = (req, res) => {
    res.render('login', {title: 'Login'});
}

const getRegisterPage = (req, res) => {
    res.render('register', {title: 'Register'});
}

const getComplaintPage = (req, res) => {
    res.render('complaint', {title: 'Complaint'});
}

const getAboutPage = (req, res) => {
    res.render('about', {title: 'About'});
}

const getContactPage = (req, res) => {
    res.render('contact', {title: 'Contact'});
}

const getCategoryPage = (req, res) => {
    res.render('category', {title: 'Category'});
}

const getSingleComplaintPage = (req, res) => {
    res.render('single-post', {title: 'Single Complaint'});
}

const getSearchPage = (req, res) => {
    res.render('search-result', {title: 'Search'});
}

const getSubmitComplaintPage = (req, res) => {
    res.render('submit-post', {title: 'Submit Complaint'});
}

const postComplaint = (req, res) => {
    res.redirect('/single-post');
}


module.exports = {
    getHomePage,
    getLoginPage,
    getRegisterPage,
    getComplaintPage,
    getAboutPage,
    getContactPage,
    getCategoryPage,
    getSingleComplaintPage,
    getSearchPage,
    getSubmitComplaintPage,
    postComplaint
}


