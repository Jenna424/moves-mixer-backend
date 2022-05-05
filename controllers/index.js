const { Workout, Exercise, Equipment } = require('../models')

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find()
    return res.status(200).json({ workouts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllWorkouts
}
