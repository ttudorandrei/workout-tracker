// importing model
const { Workout } = require("../../models");

// code to get all the workouts
const getAllWorkouts = async (req, res) => {
  try {
    // this adds all of the durations and adds a new field in the Workout object stored in the db
    const workouts = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);

    return res.status(200).json(workouts);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to get workout" });
  }
};

// function to target the Workout by id update it
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

// function to add a new workout in the database
const addWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create({});

    return res.status(200).json(newWorkout);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to add workout" });
  }
};

// code to get all of the durations for the past seven days, add them, store them in a new key in the Workout object in the db and sort them with the latest being shown first
const getRange = async (req, res) => {
  try {
    const workoutDuration = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ])
      .sort({ day: 1 })
      .limit(7);

    return res.status(200).json(workoutDuration);
  } catch (error) {
    console.info();
    return res.status(500).json({ error: "Failed to get workout" });
  }
};

module.exports = { getAllWorkouts, updateWorkout, addWorkout, getRange };
