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

const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(workout)
  } catch (err) {
    res.send(err.message)
  }
}

const getWorkoutExercises = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id)
    const workoutExercises = []
    for await (const exerciseId of workout.exercises) {
      workoutExercises.push(await Exercise.findById(exerciseId))
    }
    return res.status(200).json(workoutExercises)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createExercise = async (req, res) => {
  try {
    const exercise = await new Exercise(req.body)
    await exercise.save()
    // Add the exercise to the workout's array of exercises
    const workoutId = req.body.workout
    const workout = await Workout.findById(workoutId)
    await Workout.findByIdAndUpdate(workoutId, {
      exercises: [...workout.exercises, exercise._id]
    })
    return res.status(201).json(exercise)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getWorkoutEquipment = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id)
    const workoutEquipment = []
    for await (const equipmentId of workout.equipment) {
      workoutEquipment.push(await Equipment.findById(equipmentId))
    }
    return res.status(200).json(workoutEquipment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createEquipment = async (req, res) => {
  try {
    const equipment = await new Equipment(req.body)
    await equipment.save()
    // Add the piece of equipment to the workout routine's array of equipment
    const workoutId = req.body.workout
    const workout = await Workout.findById(workoutId)
    await Workout.findByIdAndUpdate(workoutId, {
      equipment: [...workout.equipment, equipment._id]
    })
    return res.status(201).json(equipment)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  getWorkoutExercises,
  createExercise,
  getWorkoutEquipment,
  createEquipment
}
