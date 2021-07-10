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
      { _id: id },
      {
        $set: req.body,
      }
    );
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = { getAllWorkouts, updateWorkout };
