function check(event) {
      var name = document.getElementsByName("name")[0].value;
      var number= document.getElementsByName("number")[0].value;
      var emailid = document.getElementsByName("emailid")[0].value;
      var address = document.getElementsByName("address")[0].value;
      
       if(name == "" || number == "" || emailid == "" || address == "")
       {
         alert("The Form is emapty");
         event.preventDefault();
       }
   
 }