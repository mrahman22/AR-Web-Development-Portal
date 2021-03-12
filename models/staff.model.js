const db = require("../db/db_connection");

db.connect();

const fetchStaff = (query) => {


  let sql = "";
  if (Object.keys(query).length !== 0) {
    sql = `SELECT * FROM staff WHERE ${Object.keys(query)} = "${Object.values(query)}"`;
  } else {
    sql = "SELECT * FROM staff";
  }


  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(results);
      }
    });
  });
};

const fetchStaffById = (id) => {
  const sql = `SELECT * FROM staff WHERE ID = ${id}`;

  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(results);
      }
    });
  });
};

postStaff = ({ first_name, last_name, department, email, contact_number }) => {
  const sql = `INSERT INTO staff(first_name, last_name, department, email, contact_number, registered_data)
               VALUES ("${first_name}", "${last_name}", "${department}", "${email}", "${contact_number}", now())`;

  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(results);
      }
    });
  });
};

deleteStaff = (id) => {
  const sql = `DELETE FROM staff WHERE ID = ${id}`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(results);
      }
    });
  });
};

updateStaff = (id, column, value) => {
  const sql = `UPDATE staff SET ${column} = "${value}" WHERE ID = ${id}`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(results);
      }
    });
  });
};

module.exports = {
  fetchStaff,
  fetchStaffById,
  postStaff,
  deleteStaff,
  updateStaff,
};
