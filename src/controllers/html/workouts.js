const { Workout } = require("../../models");
const path = require("path");

const currentPath = path.join(__dirname, "../../public/", "index.html");

const renderHomepage = async (req, res) => {
  try {
    res.sendFile(currentPath);
  } catch (error) {
    console.info(error.message);
  }
};
const renderStatsPage = async (req, res) => {
  res.json("stats page hit");
};
const renderExercisePage = async (req, res) => {
  res.json("exercise page hit");
};

module.exports = { renderHomepage, renderStatsPage, renderExercisePage };
