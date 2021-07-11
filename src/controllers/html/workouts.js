const { Workout } = require("../../models");

const renderHomepage = async (req, res) => {
  res.json("/");
};
const renderStatsPage = async (req, res) => {
  res.json("stats page hit");
};
const renderExercisePage = async (req, res) => {
  res.json("exercise page hit");
};

module.exports = { renderHomepage, renderStatsPage, renderExercisePage };
