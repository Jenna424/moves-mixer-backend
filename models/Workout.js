const { Schema } = require('mongoose')
const Workout = new Schema(
  {
    title: { type: String, required: true },
    trainingType: { type: String, required: true },
    targetArea: { type: String, required: true },
    duration: { type: Number, required: true },
    image: { type: String, required: true },
    exercises: [
      { type: Schema.Types.ObjectId, ref: 'Exercise', required: true }
    ],
    equipment: [
      { type: Schema.Types.ObjectId, ref: 'Equipment', required: true }
    ]
  },
  { timestamps: true }
)
module.exports = Workout
