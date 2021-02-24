const apiRouter = require("express").Router();
const {
  getAllStaff,
  getStaffById,
  postNewStaff,
  deleteStaffById
} = require("../controller/staff.controller");

apiRouter.route("/").get(getAllStaff);
apiRouter.get("/:staff_id", getStaffById);
apiRouter.delete("/:staff_id", deleteStaffById)
apiRouter.post("/", postNewStaff);

module.exports = apiRouter;
