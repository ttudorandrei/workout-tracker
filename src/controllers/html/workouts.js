const { Workout } = require("../../models");

const renderHomepage = async (req, res) => {
  console.log("homepage hit");
};
const renderStatsPage = async (req, res) => {
  console.log("stats page hit");
};
const renderExercisePage = async (req, res) => {
  console.log("exercise page hit");
};

module.exports = { renderHomepage, renderStatsPage, renderExercisePage };
