const { Workout } = require("../../models");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    res.json(workouts);
  } catch (error) {
    console.info(error.message);
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params.id;

    const workoutToUpdate = await Workout.findByIdAndUpdate(
      id,
      {
        $push: { exercises: req.body },
      },
      { useFindAndModify: false }
    );

    res.json(workoutToUpdate);
  } catch (error) {
    console.info(error.message);
  }
};

const addWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create({});

    res.json(newWorkout);
  } catch (error) {
    console.info(error.message);
  }
};

const getRange = async (req, res) => {
  try {
    const workoutRange = Workout.aggregate();
    res.json(workoutRange);
  } catch (error) {
    console.info();
  }
};

module.exports = { getAllWorkouts, updateWorkout, addWorkout, getRange };
