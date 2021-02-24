const apiRouter = require("express").Router();
const {
  getAllStaff,
  getStaffById,
  postNewStaff,
  deleteStaffById,
  updateStaffRecord
} = require("../controller/staff.controller");

apiRouter.route("/").get(getAllStaff);
apiRouter.get("/:staff_id", getStaffById);
apiRouter.patch("/:staff_id", updateStaffRecord)
apiRouter.delete("/:staff_id", deleteStaffById)
apiRouter.post("/", postNewStaff);

module.exports = apiRouter;
