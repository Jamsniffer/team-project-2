const router = require('express').Router();

const userRoutes = require("./userRoutes");

const calisthenicsRoutes = require('./calisthenicsRoutes');
const weighttrainingRoutes = require('./weighttrainingRoutes');
const superheroRoutes = require('./superheroRoutes');


router.use("/user", userRoutes);
router.use('/bodybuilding', bodybuildingRoutes);
router.use('/calisthenics', calisthenicsRoutes);
router.use("/superhero", superheroRoutes);
router.use("/weighttraining", weighttrainingRoutes);



module.exports = router