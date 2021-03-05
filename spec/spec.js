const app = require("../server");
const request = require("supertest");
const chai = require("chai");
const { expect } = require("chai");

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
