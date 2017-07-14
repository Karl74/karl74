console.log("hello guys");
var name;
var email;
var comment;
var theContact = {};


$("#sub1").on("click", function(){
  event.preventDefault();
  name = $("#name").val();
  email = $("#email").val();
  comment = $("#comments").val();
  console.log("hola");
  theContact = {
    Name: name,
    Email: email,
    Comment: comment
  }
  console.log(name);
  console.log (theContact)
$.post("api/addcontact", theContact, function(data){
  alert("Thanks for contact me I will send you an e-mail soon!");
})

});
