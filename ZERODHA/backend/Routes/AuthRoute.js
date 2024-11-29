

// const { Signup, Login } = require('../Controllers/AuthController')
// const router = require('express').Router()

// router.post('/signup', Signup)
// router.post('/login', Login)
// router.post('/',userVerification)

// module.exports = router

const { Signup, Login } = require('../Controllers/AuthController');
const { userVerification } = require('../Middlewares/AuthMiddleware'); // Import userVerification
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/verify', userVerification); // Adjusted route to use '/verify'


module.exports = router;
