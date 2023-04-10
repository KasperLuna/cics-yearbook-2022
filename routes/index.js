import express from "express";
import CS from "../data/CS.js";
import IS from "../data/IS.js";
import IT from "../data/IT.js";

const router = express.Router();

const baseURL =
  "https://yearbook.ust.edu.ph/2021/COLLEGE-OF-INFORMATION-AND-COMPUTING-SCIENCES";

/* GET home page. */
router.get("/", function (_req, res, _next) {
  res.render("index");
}).get("/CS", function (_req, res, _next) {
  res.render("yearbook", {
    title: "Computer Science",
    students: CS,
    baseURL: baseURL,
    course: "COMPUTER-SCIENCE"
  });
}).get("/IS", function (_req, res, _next) {
  res.render("yearbook", {
    title: "Information Systems",
    students: IS,
    baseURL: baseURL,
    course: "INFORMATION-SYSTEMS"
  });
}).get("/IT", function (_req, res, _next) {
  res.render("yearbook", {
    title: "Information Technonogy",
    students: IT,
    baseURL: baseURL,
    course: "INFORMATION-TECHNOLOGY"
  });
});

export default router;
