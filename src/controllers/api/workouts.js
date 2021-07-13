const { Workout } = require("../../models");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    return res.status(200).json(workouts);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to get workout" });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    const workoutToUpdate = await Workout.findByIdAndUpdate(
      id,
      {
        $push: { exercises: req.body },
      },
      { useFindAndModify: false }
    );

    return res.status(200).json(workoutToUpdate);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to update workout" });
  }
};

const addWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create({});

    return res.status(200).json(newWorkout);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to add workout" });
  }
};

const getRange = async (req, res) => {
  try {
    const workoutRange = Workout.aggregate();
    return res.status(200).json(workoutRange);
  } catch (error) {
    console.info();
    return res.status(500).json({ error: "Failed to get workout" });
  }
};

module.exports = { getAllWorkouts, updateWorkout, addWorkout, getRange };
