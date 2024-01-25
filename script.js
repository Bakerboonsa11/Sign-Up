const passwordInput = document.getElementById('pass');
form = document.querySelector("form");
input_element = document.querySelectorAll("input");
console.log(input_element);

// passwordInput.addEventListener('input', function() {
//     const maskedValue = this.value.replace(/./g, '*');
//     this.value = maskedValue;
//   });
for(let i =0 ; i<= input_element.length;i++){
    input_element[i].addEventListener('input', function() {
             if(input_element[i].validty.valid)
         });
}

