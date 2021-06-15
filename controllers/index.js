const router = require('express').Router();
const homeRoutes = require('./homeroutes');

router.use('/', homeRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;