const mongoose = require('mongoose')
const WorkoutSchema = require('./Workout')
const ExerciseSchema = require('./Exercise')
const EquipmentSchema = require('./Equipment')

const Workout = mongoose.model('Workout', WorkoutSchema)
const Exercise = mongoose.model('Exercise', ExerciseSchema)
const Equipment = mongoose.model('Equipment', EquipmentSchema)

module.exports = {
  Workout,
  Exercise,
  Equipment
}
