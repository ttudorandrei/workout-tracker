// importing dependencies
const { Router } = require("express");

const {
  getAllWorkouts,
  updateWorkout,
  addWorkout,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/workouts", getAllWorkouts);
router.put("/workouts/:id", updateWorkout);
router.post("/workouts", addWorkout);

module.exports = router;
