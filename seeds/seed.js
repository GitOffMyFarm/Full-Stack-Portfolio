const sequelize = require('../config/connection');
const Projects = require('../models/projects');
const projectData = require('./projects.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    for (const project of projectData) {
        await Projects.create({
            ...project
        });
    }

    process.exit(0);
};

seedDatabase();