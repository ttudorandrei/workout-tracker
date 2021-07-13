// importing dependencies
const { Router } = require("express");

const {
  getAllWorkouts,
  updateWorkout,
  addWorkout,
  getRange,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/workouts/range", getRange);
router.put("/workouts/:id", updateWorkout);
router.get("/workouts", getAllWorkouts);
router.post("/workouts", addWorkout);

module.exports = router;
