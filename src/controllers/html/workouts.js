// require dependencies
const path = require("path");

// rendering the static html files
const renderHomepage = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../../public/index.html"));
  } catch (error) {
    console.info(error.message);
  }
};

// rendering the static html files
const renderStatsPage = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../../public/stats.html"));
  } catch (error) {
    console.info(error.message);
  }
};

// rendering the static html files
const renderExercisePage = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../../public/exercise.html"));
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = { renderHomepage, renderStatsPage, renderExercisePage };
