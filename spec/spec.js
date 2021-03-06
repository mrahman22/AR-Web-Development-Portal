const app = require("../server");
const request = require("supertest");
const chai = require("chai");
const { expect } = require("chai");
const db = require("../db/db_connection");

describe("/api", () => {
  it("GET 200: responds with an array of all staff members from from the database", () => {
    return request(app)
      .get("/api")
      .then((response) => {
        JSON.parse(response.text).forEach((staff) => {
          expect(staff).to.have.keys(
            "id",
            "first_name",
            "last_name",
            "department",
            "email",
            "contact_number",
            "registered_data"
          );
        });
      });
  });
});

describe("/api", () => {
  it("GET 200: responds with details of selected staff member using staff_id", () => {
    return request(app)
      .get("/api/1")
      .then((response) => {
        JSON.parse(response.text).forEach((staff) => {
          expect(staff).to.have.keys(
            "id",
            "first_name",
            "last_name",
            "department",
            "email",
            "contact_number",
            "registered_data"
          );
        });
        expect(JSON.parse(response.text).length).to.equal(1)
      });
  });
});
