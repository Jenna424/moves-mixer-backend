const db = require('../db')
const { Workout, Exercise, Equipment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const workout1 = await new Workout({
    title: 'Ballet Barre Routine',
    trainingType: 'Strength Training',
    targetArea: 'Lower Body',
    duration: 30,
    image:
      'https://st2.depositphotos.com/6840962/10931/v/950/depositphotos_109319864-stock-illustration-vector-illustrations-of-ballet-icon.jpg',
    exercises: [],
    equipment: []
  })
  await workout1.save()

  const workout2 = await new Workout({
    title: 'Pilates Routine',
    trainingType: 'Strength Training',
    targetArea: 'Lower Body',
    duration: 45,
    image:
      'https://media.istockphoto.com/vectors/yoga-line-illustration-icon-on-white-background-vector-id1250065930?k=20&m=1250065930&s=612x612&w=0&h=j4vkcrrQ368OW1lr2m3zD_8NiGbD2RSeGqsRrqhqkIw=',
    exercises: [],
    equipment: []
  })
  await workout2.save()

  const workout3 = await new Workout({
    title: 'Arm Workout',
    trainingType: 'Strength Training',
    targetArea: 'Upper Body',
    duration: 15,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRGUCGT1nOyW7tyvZcQw3IfiDHJkPyByhdg&usqp=CAU',
    exercises: [],
    equipment: []
  })
  await workout3.save()

  const exercise1 = await new Exercise({
    name: 'Plié',
    instructions:
      'Stand with heels together, toes turned outward. Bend the knees deeply, moving straight down. Then straighten your legs and return to the starting position',
    sets: 3,
    reps: 8,
    image:
      'https://www.wikihow.com/images/thumb/4/45/Do-a-Plie-in-Ballet-Step-3-Version-3.jpg/v4-460px-Do-a-Plie-in-Ballet-Step-3-Version-3.jpg',
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
    image:
      'https://www.wikihow.com/images/thumb/3/33/Do-a-Releve-Step-21.jpg/v4-460px-Do-a-Releve-Step-21.jpg.webp',
    workout: workout1._id
  })
  await exercise2.save()

  workout1.exercises = [...workout1.exercises, exercise2._id]
  await workout1.save()

  const exercise3 = await new Exercise({
    name: 'Ronde de Jambe',
    instructions:
      'Move your leg from the front to the back in a circular motion',
    sets: 3,
    reps: 8,
    image:
      'http://balletwithchiara.weebly.com/uploads/5/3/3/2/53322897/3594675_orig.png',
    workout: workout1._id
  })
  await exercise3.save()

  workout1.exercises = [...workout1.exercises, exercise3._id]
  await workout1.save()

  const equipment1 = await new Equipment({
    name: 'Ballet Barre',
    specifications: 'Traditional Wood; Double Bar',
    image:
      'https://cdn11.bigcommerce.com/s-c53ep9jjoe/images/stencil/1280x1280/attribute_rule_images/41864_source_1634740618.jpg',
    workout: workout1._id
  })
  await equipment1.save()

  workout1.equipment = [...workout1.equipment, equipment1._id]
  await workout1.save()

  const exercise4 = await new Exercise({
    name: 'Leg Circles',
    instructions:
      'Lie faceup with your arms by your sides, palms down. Bend your left knee and place your left foot flat on the floor. Extend your right leg up so that it’s perpendicular to the floor. Circle your right leg out to the side, down toward the ground, and return to your starting position. Then reverse the circle. Then switch sides.',
    sets: 2,
    reps: 10,
    image:
      'https://hips.hearstapps.com/womenshealth-production.s3.amazonaws.com/images/4804/daisy_leg_circle__medium_4x3.jpg',
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
    image:
      'https://media.istockphoto.com/vectors/pilates-vector-id165024733?b=1&k=20&m=165024733&s=612x612&w=0&h=MiMC5IFvJBFeMNVZBitgBXoGOHo5FCGk_eBPszxubuE=',
    workout: workout2._id
  })
  await exercise5.save()

  workout2.exercises = [...workout2.exercises, exercise5._id]
  await workout2.save()

  const exercise6 = await new Exercise({
    name: 'Plank',
    instructions:
      'Start on your forearms and knees. Exhale to draw the abs inward and upward, taking one leg back to a straight position and then the other.  Hold for 30–60 seconds',
    sets: 2,
    reps: 1,
    image:
      'https://media.istockphoto.com/vectors/woman-doing-plank-exercise-on-blue-mat-with-stopclock-symbol-over-her-vector-id1204463032?b=1&k=20&m=1204463032&s=170667a&w=0&h=O54bZBQdlFRclU_hPGok2zZxGzHDraL3pkMEnHqUbu4=',
    workout: workout2._id
  })
  await exercise6.save()

  workout2.exercises = [...workout2.exercises, exercise6._id]
  await workout2.save()

  const equipment2 = await new Equipment({
    name: 'Pilates Ball',
    specifications: 'Inflatable mini stability ball',
    image: 'https://m.media-amazon.com/images/I/71AaM88bHuL._AC_SX679_.jpg',
    workout: workout2._id
  })
  await equipment2.save()

  workout2.equipment = [...workout2.equipment, equipment2._id]
  await workout2.save()

  const exercise7 = await new Exercise({
    name: 'Bicep Curl',
    instructions:
      'Bring the dumbbells all the way up to your shoulders by bending your elbows. Reverse the curl slowly and repeat.',
    sets: 3,
    reps: 8,
    image:
      'https://www.spotebi.com/wp-content/uploads/2014/10/biceps-curl-exercise-illustration.jpg',
    workout: workout3._id
  })
  await exercise7.save()

  workout3.exercises = [...workout3.exercises, exercise7._id]
  await workout3.save()

  const exercise8 = await new Exercise({
    name: 'Tricep Extensions',
    instructions:
      'Lift the dumbbell directly overhead. Extend both arms fully, then exhale and slowly lower the weight down, bringing the weight behind the head by bending at the elbows.',
    sets: 3,
    reps: 8,
    image:
      'https://www.spotebi.com/wp-content/uploads/2014/10/dumbbell-triceps-extension-exercise-illustration.jpg',
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
    image:
      'https://www.spotebi.com/wp-content/uploads/2014/10/big-arm-circles-exercise-illustration.jpg',
    workout: workout3._id
  })
  await exercise9.save()

  workout3.exercises = [...workout3.exercises, exercise9._id]
  await workout3.save()

  const equipment3 = await new Equipment({
    name: 'Dumbbell',
    specifications: 'Anti-slip grip; 3lbs',
    image:
      'https://www.mytrendyphone.eu/images/Anti-Slip-Fitness-Neoprene-Dumbbell-1kg-Blue-22102021-01-p.jpg',
    workout: workout3._id
  })
  await equipment3.save()

  workout3.equipment = [...workout3.equipment, equipment3._id]
  await workout3.save()

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
