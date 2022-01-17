$('.confirm_appointment').submit(function(e) {

   e.preventDefault();

   var URL = "https://qlgkit2iyd.execute-api.us-west-2.amazonaws.com/production/contact-me";

   var name = $("#name").val();
   var email = $("#email").val();
   var subject = $("#subject").val();
   var desc = $("#message").val();

   // basic validation
   var Namere = /[A-Za-z]{1}[A-Za-z]/;
   if (!Namere.test(name)) {
      alert ("Name can not less than 2 char");
      return;
   }

   if (email==="") {
      alert ("Please enter your email id");
      return;
   }

   if (!Namere.test(desc)) {
      alert ("Message can not less than 2 char");
      return;
   }

   var data = {
      name : name,
      email : email,
      subject : subject,
      desc : desc
   };

   $.ajax({
      type: "POST",
      url : URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      success: function () {
         // clear form and show a success message
         alert("Thanks for the email! We will contact you soon.");
         document.getElementById("contact-form").reset();
      },
      error: function () {
         // show an error message
         alert("Please try again, thanks!");
      }});
});