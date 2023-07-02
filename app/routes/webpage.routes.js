const router = require('express').Router();

const {getHomePage,
    getLoginPage,
    getRegisterPage,
    getComplaintPage,
    getAboutPage,
    getContactPage,
    getCategoryPage,
    getSingleComplaintPage,
    getSearchPage,
    getSubmitComplaintPage,
    postComplaint } = require('../controllers/index.controller');


router.get('/', getHomePage);
router.get('/login', getLoginPage);
router.get('/register', getRegisterPage);
router.get('/complaint', getComplaintPage);
router.get('/about', getAboutPage);
router.get('/contact', getContactPage);
router.get('/category', getCategoryPage);
router.get('/single-post/:id', getSingleComplaintPage);
router.get('/single-post/', getSingleComplaintPage);
router.get('/search-result', getSearchPage);
router.get('/submit-complaint', getSubmitComplaintPage);

router.post('/complaint', postComplaint);

module.exports = router;
