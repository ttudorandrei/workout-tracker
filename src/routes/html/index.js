// importing dependencies
const { Router } = require("express");
const {
  renderStatsPage,
  renderExercisePage,
  renderHomepage,
} = require("../../controllers/html/workouts");

const router = Router();

router.get("/stats", renderStatsPage);
router.get("/exercise", renderExercisePage);
router.get("/", renderHomepage);

module.exports = router;
