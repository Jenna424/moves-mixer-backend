const { Workout, Exercise, Equipment } = require('../models')

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find()
    return res.status(200).json({ workouts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createWorkout = async (req, res) => {
  try {
    const workout = await new Workout(req.body)
    await workout.save()
    return res.status(201).json(workout)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllWorkouts,
  createWorkout
}
