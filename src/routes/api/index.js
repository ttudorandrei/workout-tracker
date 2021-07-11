// importing dependencies
const { Router } = require("express");

const {
  getAllWorkouts,
  updateWorkout,
  addWorkout,
  getRange,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/workouts", getAllWorkouts);
router.put("/workouts/:id", updateWorkout);
router.post("/workouts", addWorkout);
router.get("/workouts/range", getRange);

module.exports = router;
