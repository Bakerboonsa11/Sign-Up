const passwordInput = document.getElementById('pass');
let form = document.querySelector("form");
let input_element = document.querySelectorAll("input");
let sub = document.querySelector("sub");
let result = document.querySelector("result");



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
      
        element.setCustomValidity( "required")
       
      } else if (element.validity.typeMismatch) {
      
        element.setCustomValidity( `Enter the required type ${element.type}`)
      
      } else if (element.validity.tooShort) {
     
        element.setCustomValidity(`it should be at least ${element.minLength} characters; you entered ${email.value.length}.`)

      }
      else if (element.validity.tooLong) {
      
        element.setCustomValidity(`it should be at least ${element.maxLength} characters; you entered ${email.value.length}.`)
   
      }
      
      else if (element.validity.patternMismatch) {
                if(element.type==tel){  
                     element.setCustomValidity(`pattern should include +251 this format`)
                    }
            
                    else{
                        element.setCustomValidity(`pattern should include ${element.pattern}this format`)
                      }
      }
     
    } 
    
sub.addEventListener("click",function(event){
    // window.location.reload();
    alert("gggg")
    event.preventDefault()
    result.textContent="registered "
    result.style.opacity = "1";

}); 
    
 

