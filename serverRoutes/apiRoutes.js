var express = require("express");
// var attController = require("../controllers/attControllers");
var path = require("path");

var router = new express.Router();

  // | C | CREATE QUERIES ==========================================
// router.post("/admin/addStudent", attController.addStudent);
// | -R | READ QUERIES =============================================
// router.get("/admin/students", attController.callroster);


// | N | NAVIGATION  +++++==========================================

//////////////For Add A Student Form//////////////////
router.get("/hangman", function(req, res){
  res.sendFile(path.join(__dirname, "../public/hangman.html"));
});

router.get("/leobien", function(req, res){
  res.sendFile(path.join(__dirname, "../public/leobien.html"));
});

router.get("/ooblee", function(req, res){
  res.sendFile(path.join(__dirname, "../public/ooblee.html"));
});

module.exports = router;
