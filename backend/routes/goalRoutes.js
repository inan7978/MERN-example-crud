const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

//these two lines of code replace the REST API calls under them
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

// router.get("/", getGoals);

// router.post("/", setGoal);

// //put needs id
// router.put("/:id", updateGoal);

// //delete needs id as well
// router.delete("/:id", deleteGoal);

module.exports = router;
