const apiRouter = require("express").Router();
const {
  getAllStaff,
  getStaffById,
  postNewStaff,
} = require("../controller/staff.controller");

apiRouter.route("/").get(getAllStaff);
apiRouter.get("/:staff_id", getStaffById);
apiRouter.post("/", postNewStaff);

module.exports = apiRouter;
