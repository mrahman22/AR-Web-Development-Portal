const {
  fetchStaff,
  fetchStaffById,
  postStaff,
  deleteStaff
} = require("../models/staff.model");

const getAllStaff = (req, res, next) => {
  fetchStaff()
    .then((staff) => {
      res.send(staff);
    })
    .catch((err) => {
      next(err);
    });
};

const getStaffById = (req, res, next) => {
  const id = parseInt(req.params.staff_id);
  fetchStaffById(id)
    .then((staff) => {
      res.send(staff);
    })
    .catch((err) => {
      next(err);
    });
};

const postNewStaff = (req, res, next) => {
  const newStaff = req.body;

  postStaff(newStaff)
    .then((staff) => {
      res.send(staff);
    })
    .catch((err) => {
      next(err);
    });
};

const deleteStaffById = (req, res, next) => {
  const id = req.params.staff_id;
  deleteStaff(id)
    .then((staff) => {
      res.send(staff);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getAllStaff,
  getStaffById,
  postNewStaff,
  deleteStaffById,
};