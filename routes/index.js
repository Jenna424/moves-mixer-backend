const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/workouts', controllers.getAllWorkouts)

router.post('/workouts', controllers.createWorkout)

router.put('/workouts/:id', controllers.updateWorkout)

router.get('/workouts/:id/exercises', controllers.getWorkoutExercises)

router.post('/exercises', controllers.createExercise)

router.get('/workouts/:id/equipment', controllers.getWorkoutEquipment)

router.post('/equipment', controllers.createEquipment)

router.delete('/exercises/:id', controllers.deleteExercise)

module.exports = router
