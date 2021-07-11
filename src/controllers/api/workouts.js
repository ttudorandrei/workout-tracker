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
    const { id } = req.params;

    const workoutToUpdate = await Workout.findOneAndUpdate(
      id,
      {
        $set: req.body,
      },
      { useFindAndModify: false }
    );

    res.json(workoutToUpdate);
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = { getAllWorkouts, updateWorkout };
