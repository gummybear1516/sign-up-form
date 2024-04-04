const pswd = document.getElementById("pswd");
const confirmPswd = document.getElementById("confirmPassword");
const errorMessage = document.querySelector(".errorMessage");
const form = document.querySelector("form");
let pswdMatch = false;

function checkPasswordMatch() {
  if (pswd.value !== confirmPswd.value) {
    errorMessage.textContent = "Passwords do not match";
    errorMessage.classList.add('errorMessage');
    pswdMatch = false;
  } else {
    errorMessage.textContent = "";
    errorMessage.classList.remove('errorMessage');
    pswdMatch = true;
  }
}

confirmPswd.addEventListener("input", checkPasswordMatch);
pswd.addEventListener("input", checkPasswordMatch);


form.addEventListener("submit",(e)=>{
  if(pswdMatch == false){
    e.preventDefault();
  } else{
    form.reset();
  }
})