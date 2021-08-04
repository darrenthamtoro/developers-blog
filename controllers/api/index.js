const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postsRoutes = require('./postRoutes');
// const postsRoutes = require('./');

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
