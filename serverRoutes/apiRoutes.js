var express = require("express");
var contactCont = require("../controller/contactCont");
var path = require("path");

var router = new express.Router();

  // | C | CREATE QUERIES ==========================================
router.post("/addcontact", contactCont.addContact);
// | -R | READ QUERIES =============================================
router.get("/admin/search/allcontacts", contactCont.seeAll);
// | N | NAVIGATION  +++++==========================================
router.get("/hangman", function(req, res){
  res.sendFile(path.join(__dirname, "../public/hangman.html"));
});

router.get("/leobien", function(req, res){
  res.sendFile(path.join(__dirname, "../public/leobien.html"));
});

router.get("/ooblee", function(req, res){
  res.sendFile(path.join(__dirname, "../public/ooblee.html"));
});
router.get("/allmycontacts", function(req, res){
  res.sendFile(path.join(__dirname, "../public/report.html"));
});

module.exports = router;
