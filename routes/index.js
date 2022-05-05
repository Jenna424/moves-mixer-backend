const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/workouts', controllers.getAllWorkouts)

router.post('/workouts', controllers.createWorkout)

module.exports = router
