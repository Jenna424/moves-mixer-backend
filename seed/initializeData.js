const db = require('../db')
const { Workout, Exercise, Equipment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const workout1 = await new Workout({
    title: 'Ballet Barre Routine',
    trainingType: 'Strength Training',
    targetArea: 'Lower Body',
    duration: 30,
    image: 'https://i.imgur.com/AGlIqww.png',
    exercises: [],
    equipment: []
  })
  await workout1.save()

  const workout2 = await new Workout({
    title: 'Pilates Routine',
    trainingType: 'Strength Training',
    targetArea: 'Core',
    duration: 45,
    image: 'https://i.imgur.com/B0rjObN.png',
    exercises: [],
    equipment: []
  })
  await workout2.save()

  const workout3 = await new Workout({
    title: 'Arm Workout',
    trainingType: 'Strength Training',
    targetArea: 'Upper Body',
    duration: 15,
    image: 'https://i.imgur.com/e1SeQ88.png',
    exercises: [],
    equipment: []
  })
  await workout3.save()

  const workout4 = await new Workout({
    title: 'Swimming Routine',
    trainingType: 'Cardio',
    targetArea: 'Full Body',
    duration: 25,
    image: 'https://i.imgur.com/Q3uH3Sm.png',
    exercises: [],
    equipment: []
  })
  await workout4.save()

  const workout5 = await new Workout({
    title: 'Cycling Routine',
    trainingType: 'Cardio',
    targetArea: 'Full Body',
    duration: 35,
    image: 'https://i.imgur.com/qA1w5rL.png',
    exercises: [],
    equipment: []
  })
  await workout5.save()

  const exercise1 = await new Exercise({
    name: 'Plié',
    instructions:
      'Stand with heels together, toes turned outward. Bend the knees deeply, moving straight down. Then straighten your legs and return to the starting position.',
    sets: 3,
    reps: 8,
    image: 'https://i.imgur.com/dxqbUOI.png',
    workout: workout1._id
  })
  await exercise1.save()

  // Updates exercises that belong to the workout routine
  workout1.exercises = [...workout1.exercises, exercise1._id]
  await workout1.save()

  const exercise2 = await new Exercise({
    name: 'Relevé',
    instructions:
      'Press through the balls of your feet, lifting your heels up high. Then lower down with control.',
    sets: 3,
    reps: 8,
    image: 'https://i.imgur.com/UAaJ8xR.png',
    workout: workout1._id
  })
  await exercise2.save()

  workout1.exercises = [...workout1.exercises, exercise2._id]
  await workout1.save()

  const exercise3 = await new Exercise({
    name: 'Arabesque',
    instructions:
      'Begin in first position. Shift your weight to the supporting leg. Extend your working leg. Support your core and upper body. Raise your arms. Lift your working leg. Lean forward.',
    sets: 3,
    reps: 8,
    image: 'https://i.imgur.com/WVXhjIV.png',
    workout: workout1._id
  })
  await exercise3.save()

  workout1.exercises = [...workout1.exercises, exercise3._id]
  await workout1.save()

  const equipment1 = await new Equipment({
    name: 'Ballet Barre',
    specifications: 'Traditional Wood',
    image: 'https://i.imgur.com/rUKOXq4.png',
    workout: workout1._id
  })
  await equipment1.save()

  workout1.equipment = [...workout1.equipment, equipment1._id]
  await workout1.save()

  const exercise4 = await new Exercise({
    name: 'Scissor Kicks',
    instructions:
      "Lie faceup. Extend your right leg up so that it's perpendicular to the floor. Bring your hands behind your right leg, pulling it in toward your face, and curl your head up. Lift your left leg off the floor a few inches. Switch legs, pulling your left leg in toward you and letting your right leg hover above the floor. Continue switching your legs.",
    sets: 2,
    reps: 10,
    image: 'https://i.imgur.com/PRREaPR.png',
    workout: workout2._id
  })
  await exercise4.save()

  workout2.exercises = [...workout2.exercises, exercise4._id]
  await workout2.save()

  const exercise5 = await new Exercise({
    name: 'Bridge',
    instructions:
      'Lie on your back. Raise your hips to create a straight line from your knees to your shoulders. Squeeze your core and pull your belly button back toward your spine. Hold for 20 to 30 seconds. Lower the hips to return to the starting position.',
    sets: 3,
    reps: 15,
    image: 'https://i.imgur.com/PvtI044.png',
    workout: workout2._id
  })
  await exercise5.save()

  workout2.exercises = [...workout2.exercises, exercise5._id]
  await workout2.save()

  const exercise6 = await new Exercise({
    name: 'Plank',
    instructions:
      'Start on your forearms and knees. Exhale to draw the abs inward and upward, taking one leg back to a straight position and then the other.  Hold for 30–60 seconds.',
    sets: 2,
    reps: 1,
    image: 'https://i.imgur.com/h3FHo0f.png',
    workout: workout2._id
  })
  await exercise6.save()

  workout2.exercises = [...workout2.exercises, exercise6._id]
  await workout2.save()

  const equipment2 = await new Equipment({
    name: 'Pilates Ball',
    specifications: 'Inflatable mini stability ball',
    image: 'https://i.imgur.com/1mos77i.png',
    workout: workout2._id
  })
  await equipment2.save()

  workout2.equipment = [...workout2.equipment, equipment2._id]
  await workout2.save()

  const exercise7 = await new Exercise({
    name: 'Bicep Curl',
    instructions:
      'Start standing with a dumbbell in each hand. Your elbows should rest at your sides and your forearms should extend out in front of your body. Bring the dumbbells all the way up to your shoulders by bending your elbows. Reverse the curl slowly and repeat.',
    sets: 3,
    reps: 8,
    image: 'https://i.imgur.com/WIXMDT5.png',
    workout: workout3._id
  })
  await exercise7.save()

  workout3.exercises = [...workout3.exercises, exercise7._id]
  await workout3.save()

  const exercise8 = await new Exercise({
    name: 'Tricep Dips',
    instructions:
      'Press into your palms to lift your body and slide forward. Lower yourself until your elbows are bent between 45 and 90 degrees. Push yourself back up slowly until your arms are almost straight and repeat.',
    sets: 3,
    reps: 8,
    image: 'https://i.imgur.com/YohhqRC.png',
    workout: workout3._id
  })
  await exercise8.save()

  workout3.exercises = [...workout3.exercises, exercise8._id]
  await workout3.save()

  const exercise9 = await new Exercise({
    name: 'Arm Circles',
    instructions:
      'Raise and extend your arms to the sides without bending the elbows. Slowly rotate your arms forward, making small circles. Complete a set in one direction and then switch, rotating backward.',
    sets: 3,
    reps: 8,
    image: 'https://i.imgur.com/mkQEuLL.png',
    workout: workout3._id
  })
  await exercise9.save()

  workout3.exercises = [...workout3.exercises, exercise9._id]
  await workout3.save()

  const equipment3 = await new Equipment({
    name: 'Dumbbell',
    specifications: 'Anti-slip grip; 3lbs',
    image: 'https://i.imgur.com/xaMYFFX.png',
    workout: workout3._id
  })
  await equipment3.save()

  workout3.equipment = [...workout3.equipment, equipment3._id]
  await workout3.save()

  const equipment4 = await new Equipment({
    name: 'Ballet Slippers',
    specifications: 'Satin and leather',
    image: 'https://i.imgur.com/drcmM0a.png',
    workout: workout1._id
  })
  await equipment4.save()

  workout1.equipment = [...workout1.equipment, equipment4._id]
  await workout1.save()

  const exercise10 = await new Exercise({
    name: 'Pirouette',
    instructions:
      'Spin on one foot with the raised foot touching the knee of the supporting leg.',
    sets: 2,
    reps: 5,
    image: 'https://i.imgur.com/uzN3FmF.png',
    workout: workout1._id
  })
  await exercise10.save()

  workout1.exercises = [...workout1.exercises, exercise10._id]
  await workout1.save()

  const exercise11 = await new Exercise({
    name: 'Grand Battement',
    instructions:
      'Extend one leg outward to the front, side or back of the body and then return it back to the supporting leg.',
    sets: 3,
    reps: 10,
    image: 'https://i.imgur.com/J5VIIP9.png',
    workout: workout1._id
  })
  await exercise11.save()

  workout1.exercises = [...workout1.exercises, exercise11._id]
  await workout1.save()

  console.log('seeded workoutRoutinesDatabase')
}
const run = async () => {
  await Workout.deleteMany()
  await Exercise.deleteMany()
  await Equipment.deleteMany()
  await main()
  db.close()
}

run()
