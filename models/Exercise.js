const { Schema } = require('mongoose')
const Exercise = new Schema(
  {
    name: { type: String, required: true },
    instructions: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    image: { type: String, required: true },
    completed: {
      type: Boolean,
      default: false
    },
    workout: { type: Schema.Types.ObjectId, ref: 'Workout', required: true }
  },
  { timestamps: true }
)
module.exports = Exercise
