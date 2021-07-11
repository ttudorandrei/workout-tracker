const path = require("path");

const renderHomepage = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (error) {
    console.info(error.message);
  }
};
const renderStatsPage = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../public/stats.html"));
  } catch (error) {
    console.info(error.message);
  }
};
const renderExercisePage = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../public/exercise.html"));
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = { renderHomepage, renderStatsPage, renderExercisePage };
