const passwordInput = document.getElementById('pass');
let form = document.querySelector("form");
let input_element = document.querySelectorAll("input");


// passwordInput.addEventListener('input', function() {
//     const maskedValue = this.value.replace(/./g, '*');
//     this.value = maskedValue;
//   });

input_element.forEach(function(element) {
     element.addEventListener("input", function() {
      if(element.validity.valid){
        element.setCustomValidity("")
      }
      else{
        showerror(element);
      }
    });
  });

  function showerror(element){
    if (element.validity.valueMissing) {
      
        element.setCustomValidity( "You have to enter something.")
       
      } else if (element.validity.typeMismatch) {
      
        element.setCustomValidity( "Entered type value needs  ")
      
      } else if (element.validity.tooShort) {
     
        element.setCustomValidity(`Email should be at least ${element.minLength} characters; you entered ${email.value.length}.`)

      }
      else if (element.validity.tooLong) {
      
        element.setCustomValidity(`Email should be at least ${element.maxLength} characters; you entered ${email.value.length}.`)
   
      }
      else if (element.validity.patternMismatch) {
        // If the data is too short,
        // display the following error message.
        element.setCustomValidity(`pattern should include this +251 format`)
   
      }
    } 
    
     
    
 

