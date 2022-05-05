const { Schema } = require('mongoose')
const Equipment = new Schema(
  {
    name: { type: String, required: true },
    specifications: { type: String, required: true },
    image: { type: String, required: true },
    workout: { type: Schema.Types.ObjectId, ref: 'Workout', required: true }
  },
  { timestamps: true }
)
module.exports = Equipment
