var Contact = require("../model/Contact.js");

module.exports = {
  addContact: function(req, res){
    console.log(req.body);
    Contact.create(req.body).then(function(doc){
      res.json(doc);}).catch(function(err){
      res.json(err);
    });
  },

  seeAll: function(req, res){
    Contact.find(function (err, contacts){
    if (err) {
        res.status(500).send(err)
    } else {
        res.send(contacts);
    }
});
  }
}//end of module
