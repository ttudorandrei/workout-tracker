// importing dependencies
const { Router } = require("express");

// html controllers
const {
  renderStatsPage,
  renderExercisePage,
  renderHomepage,
} = require("../../controllers/html/workouts");

const router = Router();

// html routes
router.get("/stats", renderStatsPage);
router.get("/exercise", renderExercisePage);
router.get("/", renderHomepage);

module.exports = router;
