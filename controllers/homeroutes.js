const router = require('express').Router();
const Projects = require('../models/projects');

router.get('/', async (req, res) => {
    try {
        projectData = await Projects.findAll();

        const projects = projectData.map(project => project.get({ plain: true }));
        //res.status(200).json(projects);
        res.render('projects', projects);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;