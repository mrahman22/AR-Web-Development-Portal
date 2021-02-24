const {
  fetchStaff,
  fetchStaffById,
  postStaff,
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
  const newStaff = {
    first_name: "Elon",
    last_name: "Musk",
    department: "Developer",
    email: "elon.musk@ar-webdevelopment.com",
    contact_number: "07999999999",
    registered_data: "",
  };

  postStaff(newStaff)
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
};
