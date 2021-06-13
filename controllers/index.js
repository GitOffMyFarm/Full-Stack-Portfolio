const router = require('express').Router();
const app = express();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
app.use(router);
routes.initialize(app);

router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;